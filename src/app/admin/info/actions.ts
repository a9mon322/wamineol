"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function createInfoPost(formData: FormData) {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false as const, error: "로그인 필요" };

  const title = String(formData.get("title") ?? "").trim();
  const content = String(formData.get("content") ?? "").trim();
  const category = String(formData.get("category") ?? "general").trim() || "general";

  if (!title) return { ok: false as const, error: "제목 필수" };
  if (!content) return { ok: false as const, error: "본문 필수" };

  const { data, error } = await supabase
    .from("info_posts")
    .insert({ title, content, category })
    .select("id")
    .single();

  if (error) return { ok: false as const, error: error.message };

  revalidatePath("/info");
  revalidatePath("/admin/info");
  redirect(`/admin/info/${data.id}`);
}

export async function updateInfoPost(id: number, formData: FormData) {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false as const, error: "로그인 필요" };

  const title = String(formData.get("title") ?? "").trim();
  const content = String(formData.get("content") ?? "").trim();
  const category = String(formData.get("category") ?? "general").trim() || "general";

  const { error } = await supabase
    .from("info_posts")
    .update({ title, content, category, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) return { ok: false as const, error: error.message };

  revalidatePath("/info");
  revalidatePath(`/info/${id}`);
  return { ok: true as const };
}

export async function deleteInfoPost(id: number) {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false as const, error: "로그인 필요" };

  const { error } = await supabase.from("info_posts").delete().eq("id", id);
  if (error) return { ok: false as const, error: error.message };

  revalidatePath("/info");
  revalidatePath("/admin/info");
  redirect("/admin/info");
}
