-- ============================================
-- 와미널 (와우정보터미널) DB 스키마
-- 사용법: Supabase 대시보드 → SQL Editor → 새 쿼리 → 아래 내용 붙여넣기 → RUN
-- ============================================

-- 1. 자유게시판 글
CREATE TABLE IF NOT EXISTS posts (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  nickname TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  view_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_posts_created_at ON posts (created_at DESC);

-- 2. 자유게시판 댓글
CREATE TABLE IF NOT EXISTS comments (
  id BIGSERIAL PRIMARY KEY,
  post_id BIGINT NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  nickname TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_comments_post_id ON comments (post_id, created_at);

-- 3. 직업 공략 (관리자만 작성)
CREATE TABLE IF NOT EXISTS class_guides (
  id BIGSERIAL PRIMARY KEY,
  class_slug TEXT NOT NULL,
  spec_slug TEXT NOT NULL,
  section_slug TEXT NOT NULL,
  content TEXT NOT NULL DEFAULT '',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (class_slug, spec_slug, section_slug)
);

-- 4. 정보글 (관리자가 쓰는 다른 게임/사이트 소개)
CREATE TABLE IF NOT EXISTS info_posts (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'general',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_info_posts_created_at ON info_posts (created_at DESC);

-- ============================================
-- RLS (Row Level Security) 정책
-- 익명 사용자는 게시판 읽기/쓰기 가능, 공략/정보글은 읽기만 (쓰기는 인증 필요)
-- ============================================

ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE class_guides ENABLE ROW LEVEL SECURITY;
ALTER TABLE info_posts ENABLE ROW LEVEL SECURITY;

-- 게시판: 모두 읽기/쓰기 가능 (수정/삭제는 비밀번호 검증을 서버에서)
DROP POLICY IF EXISTS "posts_read_all" ON posts;
CREATE POLICY "posts_read_all" ON posts FOR SELECT USING (true);

DROP POLICY IF EXISTS "posts_insert_all" ON posts;
CREATE POLICY "posts_insert_all" ON posts FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "posts_update_all" ON posts;
CREATE POLICY "posts_update_all" ON posts FOR UPDATE USING (true);

DROP POLICY IF EXISTS "posts_delete_all" ON posts;
CREATE POLICY "posts_delete_all" ON posts FOR DELETE USING (true);

DROP POLICY IF EXISTS "comments_read_all" ON comments;
CREATE POLICY "comments_read_all" ON comments FOR SELECT USING (true);

DROP POLICY IF EXISTS "comments_insert_all" ON comments;
CREATE POLICY "comments_insert_all" ON comments FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "comments_delete_all" ON comments;
CREATE POLICY "comments_delete_all" ON comments FOR DELETE USING (true);

-- 공략: 누구나 읽기, 인증된 유저(=관리자)만 쓰기
DROP POLICY IF EXISTS "class_guides_read_all" ON class_guides;
CREATE POLICY "class_guides_read_all" ON class_guides FOR SELECT USING (true);

DROP POLICY IF EXISTS "class_guides_write_auth" ON class_guides;
CREATE POLICY "class_guides_write_auth" ON class_guides FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- 정보글: 누구나 읽기, 인증된 유저만 쓰기
DROP POLICY IF EXISTS "info_posts_read_all" ON info_posts;
CREATE POLICY "info_posts_read_all" ON info_posts FOR SELECT USING (true);

DROP POLICY IF EXISTS "info_posts_write_auth" ON info_posts;
CREATE POLICY "info_posts_write_auth" ON info_posts FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');
