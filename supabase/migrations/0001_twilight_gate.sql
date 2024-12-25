/*
  # Initial Schema for Email CRM System

  1. New Tables
    - users
      - Basic user information
    - campaigns
      - Email campaign details
    - landing_pages
      - Landing and thank you pages
    - email_trackers
      - Email tracking information
    - contacts
      - Subscriber/contact information

  2. Security
    - RLS enabled on all tables
    - Policies for authenticated users
*/

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Campaigns table
CREATE TABLE IF NOT EXISTS campaigns (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  subject text NOT NULL,
  content text NOT NULL,
  user_id uuid REFERENCES users(id),
  created_at timestamptz DEFAULT now(),
  status text NOT NULL DEFAULT 'draft',
  scheduled_for timestamptz,
  CONSTRAINT valid_status CHECK (status IN ('draft', 'scheduled', 'sent'))
);

ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD own campaigns"
  ON campaigns
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Landing pages table
CREATE TABLE IF NOT EXISTS landing_pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  content text NOT NULL,
  user_id uuid REFERENCES users(id),
  created_at timestamptz DEFAULT now(),
  type text NOT NULL,
  campaign_id uuid REFERENCES campaigns(id),
  CONSTRAINT valid_type CHECK (type IN ('landing', 'thank-you'))
);

ALTER TABLE landing_pages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD own landing pages"
  ON landing_pages
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Email trackers table
CREATE TABLE IF NOT EXISTS email_trackers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id uuid REFERENCES campaigns(id),
  recipient_email text NOT NULL,
  opened_at timestamptz,
  clicked_at timestamptz,
  link_clicked text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE email_trackers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view tracking data for own campaigns"
  ON email_trackers
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM campaigns
      WHERE campaigns.id = email_trackers.campaign_id
      AND campaigns.user_id = auth.uid()
    )
  );

-- Contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  name text,
  user_id uuid REFERENCES users(id),
  created_at timestamptz DEFAULT now(),
  subscribed boolean DEFAULT true,
  UNIQUE(email, user_id)
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD own contacts"
  ON contacts
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);