
-- Enums
create type public.project_type as enum ('privat', 'gewerbe', 'kommune');
create type public.service_type as enum ('tiefbau', 'erdbau', 'abbruch', 'galabau', 'sonstiges');

-- Table
create table public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 1 and 100),
  email text not null check (char_length(email) between 3 and 255),
  phone text check (phone is null or char_length(phone) <= 50),
  project_type public.project_type not null,
  service public.service_type not null,
  message text not null check (char_length(message) between 10 and 2000)
);

-- RLS
alter table public.contact_requests enable row level security;

-- Anyone (including anonymous visitors) can insert a contact request.
create policy "Anyone can submit a contact request"
on public.contact_requests
for insert
to anon, authenticated
with check (true);

-- No public SELECT / UPDATE / DELETE policies — only service_role can read/manage.
