"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function badInput(msg: string) {
  return { ok: false, error: msg } as const;
}

function hash(pw: string) {
  // 단순 해시 (관리용 - 보안용 아님). 게시글 삭제 검증용.
  let h = 0;
  for (let i = 0; i < pw.length; i++) {
    h = ((h << 5) - h + pw.charCodeAt(i)) | 0;
  }
  return String(h);
}

export async function createPost(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const content = String(formData.get("content") ?? "").trim();
  const nickname = String(formData.get("nickname") ?? "").trim();
  const password = String(formData.get("password") ?? "").trim();

  if (!title || title.length > 100) return badInput("제목은 1~100자");
  if (!content || content.length > 10000) return badInput("본문은 1~10000자");
  if (!nickname || nickname.length > 20) return badInput("닉네임은 1~20자");
  if (!password || password.length < 4) return badInput("비밀번호는 4자 이상");

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .insert({
      title,
      content,
      nickname,
      password_hash: hash(password),
    })
    .select("id")
    .single();

  if (error) return badInput(error.message);

  revalidatePath("/board");
  redirect(`/board/${data.id}`);
}

export async function createComment(formData: FormData) {
  const postId = Number(formData.get("post_id"));
  const content = String(formData.get("content") ?? "").trim();
  const nickname = String(formData.get("nickname") ?? "").trim();
  const password = String(formData.get("password") ?? "").trim();

  if (!postId) return badInput("잘못된 요청");
  if (!content || content.length > 1000) return badInput("댓글은 1~1000자");
  if (!nickname || nickname.length > 20) return badInput("닉네임은 1~20자");
  if (!password || password.length < 4) return badInput("비밀번호는 4자 이상");

  const supabase = await createClient();
  const { error } = await supabase.from("comments").insert({
    post_id: postId,
    content,
    nickname,
    password_hash: hash(password),
  });

  if (error) return badInput(error.message);

  revalidatePath(`/board/${postId}`);
  return { ok: true } as const;
}

export async function deletePost(postId: number, password: string) {
  const supabase = await createClient();
  const { data: post, error: fetchErr } = await supabase
    .from("posts")
    .select("password_hash")
    .eq("id", postId)
    .single();

  if (fetchErr || !post) return badInput("글을 찾을 수 없습니다");
  if (post.password_hash !== hash(password)) return badInput("비밀번호가 틀립니다");

  const { error } = await supabase.from("posts").delete().eq("id", postId);
  if (error) return badInput(error.message);

  revalidatePath("/board");
  redirect("/board");
}
