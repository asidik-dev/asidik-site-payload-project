import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`webservices_blocks_spacer_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`webservices\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`webservices_blocks_spacer_block_order_idx\` ON \`webservices_blocks_spacer_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`webservices_blocks_spacer_block_parent_id_idx\` ON \`webservices_blocks_spacer_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`webservices_blocks_spacer_block_path_idx\` ON \`webservices_blocks_spacer_block\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`webservices_blocks_single_column_center_rich_text_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`copy\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`webservices\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`webservices_blocks_single_column_center_rich_text_block_order_idx\` ON \`webservices_blocks_single_column_center_rich_text_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`webservices_blocks_single_column_center_rich_text_block_parent_id_idx\` ON \`webservices_blocks_single_column_center_rich_text_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`webservices_blocks_single_column_center_rich_text_block_path_idx\` ON \`webservices_blocks_single_column_center_rich_text_block\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`webservices_blocks_bullet_point_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`webservices\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`webservices_blocks_bullet_point_block_order_idx\` ON \`webservices_blocks_bullet_point_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`webservices_blocks_bullet_point_block_parent_id_idx\` ON \`webservices_blocks_bullet_point_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`webservices_blocks_bullet_point_block_path_idx\` ON \`webservices_blocks_bullet_point_block\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`webservices_blocks_card_bullet_point_section\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`header_text\` text,
  	\`subheading\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`webservices\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`webservices_blocks_card_bullet_point_section_order_idx\` ON \`webservices_blocks_card_bullet_point_section\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`webservices_blocks_card_bullet_point_section_parent_id_idx\` ON \`webservices_blocks_card_bullet_point_section\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`webservices_blocks_card_bullet_point_section_path_idx\` ON \`webservices_blocks_card_bullet_point_section\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`webservices_blocks_button_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`button_text\` text,
  	\`button_link\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`webservices\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`webservices_blocks_button_block_order_idx\` ON \`webservices_blocks_button_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`webservices_blocks_button_block_parent_id_idx\` ON \`webservices_blocks_button_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`webservices_blocks_button_block_path_idx\` ON \`webservices_blocks_button_block\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`webservices_blocks_feature_card_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text,
  	\`image_left\` integer DEFAULT false,
  	\`image_id\` integer,
  	\`counter\` numeric,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`webservices\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`webservices_blocks_feature_card_block_order_idx\` ON \`webservices_blocks_feature_card_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`webservices_blocks_feature_card_block_parent_id_idx\` ON \`webservices_blocks_feature_card_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`webservices_blocks_feature_card_block_path_idx\` ON \`webservices_blocks_feature_card_block\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`webservices_blocks_feature_card_block_image_idx\` ON \`webservices_blocks_feature_card_block\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`webservices\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`description\` text,
  	\`slug\` text,
  	\`hero_title\` text,
  	\`hero_subheading\` text,
  	\`hero_button_text\` text,
  	\`hero_image_id\` integer,
  	\`seo_title\` text,
  	\`seo_description\` text,
  	\`seo_keywords\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`_status\` text DEFAULT 'draft',
  	FOREIGN KEY (\`hero_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`webservices_slug_idx\` ON \`webservices\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`webservices_hero_hero_image_idx\` ON \`webservices\` (\`hero_image_id\`);`)
  await db.run(sql`CREATE INDEX \`webservices_updated_at_idx\` ON \`webservices\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`webservices_created_at_idx\` ON \`webservices\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`webservices__status_idx\` ON \`webservices\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`_webservices_v_blocks_spacer_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_webservices_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_webservices_v_blocks_spacer_block_order_idx\` ON \`_webservices_v_blocks_spacer_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_webservices_v_blocks_spacer_block_parent_id_idx\` ON \`_webservices_v_blocks_spacer_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_webservices_v_blocks_spacer_block_path_idx\` ON \`_webservices_v_blocks_spacer_block\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_webservices_v_blocks_single_column_center_rich_text_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`copy\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_webservices_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_webservices_v_blocks_single_column_center_rich_text_block_order_idx\` ON \`_webservices_v_blocks_single_column_center_rich_text_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_webservices_v_blocks_single_column_center_rich_text_block_parent_id_idx\` ON \`_webservices_v_blocks_single_column_center_rich_text_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_webservices_v_blocks_single_column_center_rich_text_block_path_idx\` ON \`_webservices_v_blocks_single_column_center_rich_text_block\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_webservices_v_blocks_bullet_point_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_webservices_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_webservices_v_blocks_bullet_point_block_order_idx\` ON \`_webservices_v_blocks_bullet_point_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_webservices_v_blocks_bullet_point_block_parent_id_idx\` ON \`_webservices_v_blocks_bullet_point_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_webservices_v_blocks_bullet_point_block_path_idx\` ON \`_webservices_v_blocks_bullet_point_block\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_webservices_v_blocks_card_bullet_point_section\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`header_text\` text,
  	\`subheading\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_webservices_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_webservices_v_blocks_card_bullet_point_section_order_idx\` ON \`_webservices_v_blocks_card_bullet_point_section\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_webservices_v_blocks_card_bullet_point_section_parent_id_idx\` ON \`_webservices_v_blocks_card_bullet_point_section\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_webservices_v_blocks_card_bullet_point_section_path_idx\` ON \`_webservices_v_blocks_card_bullet_point_section\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_webservices_v_blocks_button_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`button_text\` text,
  	\`button_link\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_webservices_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_webservices_v_blocks_button_block_order_idx\` ON \`_webservices_v_blocks_button_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_webservices_v_blocks_button_block_parent_id_idx\` ON \`_webservices_v_blocks_button_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_webservices_v_blocks_button_block_path_idx\` ON \`_webservices_v_blocks_button_block\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_webservices_v_blocks_feature_card_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`text\` text,
  	\`image_left\` integer DEFAULT false,
  	\`image_id\` integer,
  	\`counter\` numeric,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_webservices_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_webservices_v_blocks_feature_card_block_order_idx\` ON \`_webservices_v_blocks_feature_card_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_webservices_v_blocks_feature_card_block_parent_id_idx\` ON \`_webservices_v_blocks_feature_card_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_webservices_v_blocks_feature_card_block_path_idx\` ON \`_webservices_v_blocks_feature_card_block\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_webservices_v_blocks_feature_card_block_image_idx\` ON \`_webservices_v_blocks_feature_card_block\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_webservices_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_name\` text,
  	\`version_description\` text,
  	\`version_slug\` text,
  	\`version_hero_title\` text,
  	\`version_hero_subheading\` text,
  	\`version_hero_button_text\` text,
  	\`version_hero_image_id\` integer,
  	\`version_seo_title\` text,
  	\`version_seo_description\` text,
  	\`version_seo_keywords\` text,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`snapshot\` integer,
  	\`published_locale\` text,
  	\`latest\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`webservices\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_hero_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_webservices_v_parent_idx\` ON \`_webservices_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_webservices_v_version_version_slug_idx\` ON \`_webservices_v\` (\`version_slug\`);`)
  await db.run(sql`CREATE INDEX \`_webservices_v_version_hero_version_hero_image_idx\` ON \`_webservices_v\` (\`version_hero_image_id\`);`)
  await db.run(sql`CREATE INDEX \`_webservices_v_version_version_updated_at_idx\` ON \`_webservices_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_webservices_v_version_version_created_at_idx\` ON \`_webservices_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_webservices_v_version_version__status_idx\` ON \`_webservices_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_webservices_v_created_at_idx\` ON \`_webservices_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_webservices_v_updated_at_idx\` ON \`_webservices_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_webservices_v_snapshot_idx\` ON \`_webservices_v\` (\`snapshot\`);`)
  await db.run(sql`CREATE INDEX \`_webservices_v_published_locale_idx\` ON \`_webservices_v\` (\`published_locale\`);`)
  await db.run(sql`CREATE INDEX \`_webservices_v_latest_idx\` ON \`_webservices_v\` (\`latest\`);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`webservices_id\` integer REFERENCES webservices(id);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_webservices_id_idx\` ON \`payload_locked_documents_rels\` (\`webservices_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`webservices_blocks_spacer_block\`;`)
  await db.run(sql`DROP TABLE \`webservices_blocks_single_column_center_rich_text_block\`;`)
  await db.run(sql`DROP TABLE \`webservices_blocks_bullet_point_block\`;`)
  await db.run(sql`DROP TABLE \`webservices_blocks_card_bullet_point_section\`;`)
  await db.run(sql`DROP TABLE \`webservices_blocks_button_block\`;`)
  await db.run(sql`DROP TABLE \`webservices_blocks_feature_card_block\`;`)
  await db.run(sql`DROP TABLE \`webservices\`;`)
  await db.run(sql`DROP TABLE \`_webservices_v_blocks_spacer_block\`;`)
  await db.run(sql`DROP TABLE \`_webservices_v_blocks_single_column_center_rich_text_block\`;`)
  await db.run(sql`DROP TABLE \`_webservices_v_blocks_bullet_point_block\`;`)
  await db.run(sql`DROP TABLE \`_webservices_v_blocks_card_bullet_point_section\`;`)
  await db.run(sql`DROP TABLE \`_webservices_v_blocks_button_block\`;`)
  await db.run(sql`DROP TABLE \`_webservices_v_blocks_feature_card_block\`;`)
  await db.run(sql`DROP TABLE \`_webservices_v\`;`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	\`media_id\` integer,
  	\`services_id\` integer,
  	\`projects_id\` integer,
  	\`parent_services_id\` integer,
  	\`testimonials_id\` integer,
  	\`processes_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`services_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`projects_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`parent_services_id\`) REFERENCES \`parent_services\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`testimonials_id\`) REFERENCES \`testimonials\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`processes_id\`) REFERENCES \`processes\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_payload_locked_documents_rels\`("id", "order", "parent_id", "path", "users_id", "media_id", "services_id", "projects_id", "parent_services_id", "testimonials_id", "processes_id") SELECT "id", "order", "parent_id", "path", "users_id", "media_id", "services_id", "projects_id", "parent_services_id", "testimonials_id", "processes_id" FROM \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`ALTER TABLE \`__new_payload_locked_documents_rels\` RENAME TO \`payload_locked_documents_rels\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_services_id_idx\` ON \`payload_locked_documents_rels\` (\`services_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_projects_id_idx\` ON \`payload_locked_documents_rels\` (\`projects_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_services_id_idx\` ON \`payload_locked_documents_rels\` (\`parent_services_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_testimonials_id_idx\` ON \`payload_locked_documents_rels\` (\`testimonials_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_processes_id_idx\` ON \`payload_locked_documents_rels\` (\`processes_id\`);`)
}
