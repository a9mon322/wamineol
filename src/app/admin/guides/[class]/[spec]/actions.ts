"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function saveGuide({
  classSlug,
  specSlug,
  sectionSlug,
  content,
}: {
  classSlug: string;
  specSlug: string;
  sectionSlug: string;
  content: string;
}) {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false as const, error: "로그인이 필요합니다" };

  const { error } = await supabase.from("class_guides").upsert(
    {
      class_slug: classSlug,
      spec_slug: specSlug,
      section_slug: sectionSlug,
      content,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "class_slug,spec_slug,section_slug" }
  );

  if (error) return { ok: false as const, error: error.message };

  revalidatePath(`/classes/${classSlug}/${specSlug}`);
  return { ok: true as const };
}
