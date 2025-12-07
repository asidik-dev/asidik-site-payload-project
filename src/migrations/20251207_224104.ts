import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`services_blocks_spacer_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_blocks_spacer_block_order_idx\` ON \`services_blocks_spacer_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_spacer_block_parent_id_idx\` ON \`services_blocks_spacer_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_spacer_block_path_idx\` ON \`services_blocks_spacer_block\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`services_blocks_single_column_center_rich_text_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`copy\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_blocks_single_column_center_rich_text_block_order_idx\` ON \`services_blocks_single_column_center_rich_text_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_single_column_center_rich_text_block_parent_id_idx\` ON \`services_blocks_single_column_center_rich_text_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_single_column_center_rich_text_block_path_idx\` ON \`services_blocks_single_column_center_rich_text_block\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`services_blocks_bullet_point_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_blocks_bullet_point_block_order_idx\` ON \`services_blocks_bullet_point_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_bullet_point_block_parent_id_idx\` ON \`services_blocks_bullet_point_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_bullet_point_block_path_idx\` ON \`services_blocks_bullet_point_block\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`services_blocks_card_bullet_point_section\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`header_text\` text,
  	\`subheading\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_blocks_card_bullet_point_section_order_idx\` ON \`services_blocks_card_bullet_point_section\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_card_bullet_point_section_parent_id_idx\` ON \`services_blocks_card_bullet_point_section\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_card_bullet_point_section_path_idx\` ON \`services_blocks_card_bullet_point_section\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`services_blocks_button_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`button_text\` text,
  	\`button_link\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_blocks_button_block_order_idx\` ON \`services_blocks_button_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_button_block_parent_id_idx\` ON \`services_blocks_button_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_button_block_path_idx\` ON \`services_blocks_button_block\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`services_blocks_feature_card_block\` (
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
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_blocks_feature_card_block_order_idx\` ON \`services_blocks_feature_card_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_feature_card_block_parent_id_idx\` ON \`services_blocks_feature_card_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_feature_card_block_path_idx\` ON \`services_blocks_feature_card_block\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_feature_card_block_image_idx\` ON \`services_blocks_feature_card_block\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`services\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`description\` text,
  	\`slug\` text,
  	\`icon_id\` integer,
  	\`animated_icon\` text DEFAULT 'meow',
  	\`hero_title\` text,
  	\`hero_subheading\` text,
  	\`hero_button_text\` text,
  	\`hero_image_id\` integer,
  	\`parent_service_id\` integer,
  	\`seo_title\` text,
  	\`seo_description\` text,
  	\`seo_keywords\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`_status\` text DEFAULT 'draft',
  	FOREIGN KEY (\`icon_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`hero_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`parent_service_id\`) REFERENCES \`parent_services\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`services_slug_idx\` ON \`services\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`services_icon_idx\` ON \`services\` (\`icon_id\`);`)
  await db.run(sql`CREATE INDEX \`services_hero_hero_image_idx\` ON \`services\` (\`hero_image_id\`);`)
  await db.run(sql`CREATE INDEX \`services_parent_service_idx\` ON \`services\` (\`parent_service_id\`);`)
  await db.run(sql`CREATE INDEX \`services_updated_at_idx\` ON \`services\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`services_created_at_idx\` ON \`services\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`services__status_idx\` ON \`services\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`_services_v_blocks_spacer_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_services_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_services_v_blocks_spacer_block_order_idx\` ON \`_services_v_blocks_spacer_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_blocks_spacer_block_parent_id_idx\` ON \`_services_v_blocks_spacer_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_blocks_spacer_block_path_idx\` ON \`_services_v_blocks_spacer_block\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_services_v_blocks_single_column_center_rich_text_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`copy\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_services_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_services_v_blocks_single_column_center_rich_text_block_order_idx\` ON \`_services_v_blocks_single_column_center_rich_text_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_blocks_single_column_center_rich_text_block_parent_id_idx\` ON \`_services_v_blocks_single_column_center_rich_text_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_blocks_single_column_center_rich_text_block_path_idx\` ON \`_services_v_blocks_single_column_center_rich_text_block\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_services_v_blocks_bullet_point_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_services_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_services_v_blocks_bullet_point_block_order_idx\` ON \`_services_v_blocks_bullet_point_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_blocks_bullet_point_block_parent_id_idx\` ON \`_services_v_blocks_bullet_point_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_blocks_bullet_point_block_path_idx\` ON \`_services_v_blocks_bullet_point_block\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_services_v_blocks_card_bullet_point_section\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`header_text\` text,
  	\`subheading\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_services_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_services_v_blocks_card_bullet_point_section_order_idx\` ON \`_services_v_blocks_card_bullet_point_section\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_blocks_card_bullet_point_section_parent_id_idx\` ON \`_services_v_blocks_card_bullet_point_section\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_blocks_card_bullet_point_section_path_idx\` ON \`_services_v_blocks_card_bullet_point_section\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_services_v_blocks_button_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`button_text\` text,
  	\`button_link\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_services_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_services_v_blocks_button_block_order_idx\` ON \`_services_v_blocks_button_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_blocks_button_block_parent_id_idx\` ON \`_services_v_blocks_button_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_blocks_button_block_path_idx\` ON \`_services_v_blocks_button_block\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_services_v_blocks_feature_card_block\` (
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
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_services_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_services_v_blocks_feature_card_block_order_idx\` ON \`_services_v_blocks_feature_card_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_blocks_feature_card_block_parent_id_idx\` ON \`_services_v_blocks_feature_card_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_blocks_feature_card_block_path_idx\` ON \`_services_v_blocks_feature_card_block\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_blocks_feature_card_block_image_idx\` ON \`_services_v_blocks_feature_card_block\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_services_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_name\` text,
  	\`version_description\` text,
  	\`version_slug\` text,
  	\`version_icon_id\` integer,
  	\`version_animated_icon\` text DEFAULT 'meow',
  	\`version_hero_title\` text,
  	\`version_hero_subheading\` text,
  	\`version_hero_button_text\` text,
  	\`version_hero_image_id\` integer,
  	\`version_parent_service_id\` integer,
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
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_icon_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_hero_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_parent_service_id\`) REFERENCES \`parent_services\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_services_v_parent_idx\` ON \`_services_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_version_version_slug_idx\` ON \`_services_v\` (\`version_slug\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_version_version_icon_idx\` ON \`_services_v\` (\`version_icon_id\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_version_hero_version_hero_image_idx\` ON \`_services_v\` (\`version_hero_image_id\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_version_version_parent_service_idx\` ON \`_services_v\` (\`version_parent_service_id\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_version_version_updated_at_idx\` ON \`_services_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_version_version_created_at_idx\` ON \`_services_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_version_version__status_idx\` ON \`_services_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_created_at_idx\` ON \`_services_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_updated_at_idx\` ON \`_services_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_snapshot_idx\` ON \`_services_v\` (\`snapshot\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_published_locale_idx\` ON \`_services_v\` (\`published_locale\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_latest_idx\` ON \`_services_v\` (\`latest\`);`)
  await db.run(sql`CREATE TABLE \`projects_additional_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`projects_additional_images_order_idx\` ON \`projects_additional_images\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`projects_additional_images_parent_id_idx\` ON \`projects_additional_images\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`projects_additional_images_image_idx\` ON \`projects_additional_images\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`projects\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	\`slug\` text,
  	\`cover_id\` integer,
  	\`force_small\` integer DEFAULT false,
  	\`detailed_text\` text,
  	\`featured\` integer DEFAULT false,
  	\`display_order\` numeric,
  	\`seo_title\` text,
  	\`seo_description\` text,
  	\`seo_keywords\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`_status\` text DEFAULT 'draft',
  	FOREIGN KEY (\`cover_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`projects_slug_idx\` ON \`projects\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`projects_cover_idx\` ON \`projects\` (\`cover_id\`);`)
  await db.run(sql`CREATE INDEX \`projects_updated_at_idx\` ON \`projects\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`projects_created_at_idx\` ON \`projects\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`projects__status_idx\` ON \`projects\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`projects_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`services_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`services_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`projects_rels_order_idx\` ON \`projects_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`projects_rels_parent_idx\` ON \`projects_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`projects_rels_path_idx\` ON \`projects_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`projects_rels_services_id_idx\` ON \`projects_rels\` (\`services_id\`);`)
  await db.run(sql`CREATE TABLE \`_projects_v_version_additional_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`_uuid\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_projects_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_projects_v_version_additional_images_order_idx\` ON \`_projects_v_version_additional_images\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_version_additional_images_parent_id_idx\` ON \`_projects_v_version_additional_images\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_version_additional_images_image_idx\` ON \`_projects_v_version_additional_images\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_projects_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_title\` text,
  	\`version_description\` text,
  	\`version_slug\` text,
  	\`version_cover_id\` integer,
  	\`version_force_small\` integer DEFAULT false,
  	\`version_detailed_text\` text,
  	\`version_featured\` integer DEFAULT false,
  	\`version_display_order\` numeric,
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
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_cover_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_projects_v_parent_idx\` ON \`_projects_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_version_version_slug_idx\` ON \`_projects_v\` (\`version_slug\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_version_version_cover_idx\` ON \`_projects_v\` (\`version_cover_id\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_version_version_updated_at_idx\` ON \`_projects_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_version_version_created_at_idx\` ON \`_projects_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_version_version__status_idx\` ON \`_projects_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_created_at_idx\` ON \`_projects_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_updated_at_idx\` ON \`_projects_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_snapshot_idx\` ON \`_projects_v\` (\`snapshot\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_published_locale_idx\` ON \`_projects_v\` (\`published_locale\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_latest_idx\` ON \`_projects_v\` (\`latest\`);`)
  await db.run(sql`CREATE TABLE \`_projects_v_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`services_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`_projects_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`services_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_projects_v_rels_order_idx\` ON \`_projects_v_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_rels_parent_idx\` ON \`_projects_v_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_rels_path_idx\` ON \`_projects_v_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_rels_services_id_idx\` ON \`_projects_v_rels\` (\`services_id\`);`)
  await db.run(sql`CREATE TABLE \`parent_services\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`description\` text,
  	\`icon_id\` integer,
  	\`animated_icon\` text DEFAULT 'meow',
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`_status\` text DEFAULT 'draft',
  	FOREIGN KEY (\`icon_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`parent_services_icon_idx\` ON \`parent_services\` (\`icon_id\`);`)
  await db.run(sql`CREATE INDEX \`parent_services_updated_at_idx\` ON \`parent_services\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`parent_services_created_at_idx\` ON \`parent_services\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`parent_services__status_idx\` ON \`parent_services\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`parent_services_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`services_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`parent_services\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`services_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`parent_services_rels_order_idx\` ON \`parent_services_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`parent_services_rels_parent_idx\` ON \`parent_services_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`parent_services_rels_path_idx\` ON \`parent_services_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`parent_services_rels_services_id_idx\` ON \`parent_services_rels\` (\`services_id\`);`)
  await db.run(sql`CREATE TABLE \`_parent_services_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_name\` text,
  	\`version_description\` text,
  	\`version_icon_id\` integer,
  	\`version_animated_icon\` text DEFAULT 'meow',
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`snapshot\` integer,
  	\`published_locale\` text,
  	\`latest\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`parent_services\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_icon_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_parent_services_v_parent_idx\` ON \`_parent_services_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_parent_services_v_version_version_icon_idx\` ON \`_parent_services_v\` (\`version_icon_id\`);`)
  await db.run(sql`CREATE INDEX \`_parent_services_v_version_version_updated_at_idx\` ON \`_parent_services_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_parent_services_v_version_version_created_at_idx\` ON \`_parent_services_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_parent_services_v_version_version__status_idx\` ON \`_parent_services_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_parent_services_v_created_at_idx\` ON \`_parent_services_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_parent_services_v_updated_at_idx\` ON \`_parent_services_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_parent_services_v_snapshot_idx\` ON \`_parent_services_v\` (\`snapshot\`);`)
  await db.run(sql`CREATE INDEX \`_parent_services_v_published_locale_idx\` ON \`_parent_services_v\` (\`published_locale\`);`)
  await db.run(sql`CREATE INDEX \`_parent_services_v_latest_idx\` ON \`_parent_services_v\` (\`latest\`);`)
  await db.run(sql`CREATE TABLE \`_parent_services_v_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`services_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`_parent_services_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`services_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_parent_services_v_rels_order_idx\` ON \`_parent_services_v_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`_parent_services_v_rels_parent_idx\` ON \`_parent_services_v_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_parent_services_v_rels_path_idx\` ON \`_parent_services_v_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`_parent_services_v_rels_services_id_idx\` ON \`_parent_services_v_rels\` (\`services_id\`);`)
  await db.run(sql`CREATE TABLE \`testimonials\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`client_name\` text,
  	\`quote\` text,
  	\`company_name\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`_status\` text DEFAULT 'draft'
  );
  `)
  await db.run(sql`CREATE INDEX \`testimonials_updated_at_idx\` ON \`testimonials\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`testimonials_created_at_idx\` ON \`testimonials\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`testimonials__status_idx\` ON \`testimonials\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`_testimonials_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_client_name\` text,
  	\`version_quote\` text,
  	\`version_company_name\` text,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`snapshot\` integer,
  	\`published_locale\` text,
  	\`latest\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`testimonials\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_testimonials_v_parent_idx\` ON \`_testimonials_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_testimonials_v_version_version_updated_at_idx\` ON \`_testimonials_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_testimonials_v_version_version_created_at_idx\` ON \`_testimonials_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_testimonials_v_version_version__status_idx\` ON \`_testimonials_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_testimonials_v_created_at_idx\` ON \`_testimonials_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_testimonials_v_updated_at_idx\` ON \`_testimonials_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_testimonials_v_snapshot_idx\` ON \`_testimonials_v\` (\`snapshot\`);`)
  await db.run(sql`CREATE INDEX \`_testimonials_v_published_locale_idx\` ON \`_testimonials_v\` (\`published_locale\`);`)
  await db.run(sql`CREATE INDEX \`_testimonials_v_latest_idx\` ON \`_testimonials_v\` (\`latest\`);`)
  await db.run(sql`CREATE TABLE \`processes\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	\`process_number\` text,
  	\`order\` numeric,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`_status\` text DEFAULT 'draft'
  );
  `)
  await db.run(sql`CREATE INDEX \`processes_updated_at_idx\` ON \`processes\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`processes_created_at_idx\` ON \`processes\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`processes__status_idx\` ON \`processes\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`_processes_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_title\` text,
  	\`version_description\` text,
  	\`version_process_number\` text,
  	\`version_order\` numeric,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`snapshot\` integer,
  	\`published_locale\` text,
  	\`latest\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`processes\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_processes_v_parent_idx\` ON \`_processes_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_processes_v_version_version_updated_at_idx\` ON \`_processes_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_processes_v_version_version_created_at_idx\` ON \`_processes_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_processes_v_version_version__status_idx\` ON \`_processes_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_processes_v_created_at_idx\` ON \`_processes_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_processes_v_updated_at_idx\` ON \`_processes_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_processes_v_snapshot_idx\` ON \`_processes_v\` (\`snapshot\`);`)
  await db.run(sql`CREATE INDEX \`_processes_v_published_locale_idx\` ON \`_processes_v\` (\`published_locale\`);`)
  await db.run(sql`CREATE INDEX \`_processes_v_latest_idx\` ON \`_processes_v\` (\`latest\`);`)
  await db.run(sql`CREATE TABLE \`payload_kv\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text NOT NULL,
  	\`data\` text NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`payload_kv_key_idx\` ON \`payload_kv\` (\`key\`);`)
  await db.run(sql`CREATE TABLE \`home_page_globals\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`home_intro_text\` text,
  	\`home_projects_header\` text,
  	\`home_services_header\` text,
  	\`home_projects_button_text\` text,
  	\`home_seo_title\` text,
  	\`home_seo_description\` text,
  	\`home_seo_keywords\` text,
  	\`_status\` text DEFAULT 'draft',
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `)
  await db.run(sql`CREATE INDEX \`home_page_globals__status_idx\` ON \`home_page_globals\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`_home_page_globals_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`version_home_intro_text\` text,
  	\`version_home_projects_header\` text,
  	\`version_home_services_header\` text,
  	\`version_home_projects_button_text\` text,
  	\`version_home_seo_title\` text,
  	\`version_home_seo_description\` text,
  	\`version_home_seo_keywords\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`snapshot\` integer,
  	\`published_locale\` text,
  	\`latest\` integer
  );
  `)
  await db.run(sql`CREATE INDEX \`_home_page_globals_v_version_version__status_idx\` ON \`_home_page_globals_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_home_page_globals_v_created_at_idx\` ON \`_home_page_globals_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_home_page_globals_v_updated_at_idx\` ON \`_home_page_globals_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_home_page_globals_v_snapshot_idx\` ON \`_home_page_globals_v\` (\`snapshot\`);`)
  await db.run(sql`CREATE INDEX \`_home_page_globals_v_published_locale_idx\` ON \`_home_page_globals_v\` (\`published_locale\`);`)
  await db.run(sql`CREATE INDEX \`_home_page_globals_v_latest_idx\` ON \`_home_page_globals_v\` (\`latest\`);`)
  await db.run(sql`CREATE TABLE \`about_page_globals\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`about_header_text\` text,
  	\`about_introductory_paragraph\` text,
  	\`about_process_header\` text,
  	\`about_testimonials_header\` text,
  	\`about_seo_title\` text,
  	\`about_seo_description\` text,
  	\`about_seo_keywords\` text,
  	\`_status\` text DEFAULT 'draft',
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `)
  await db.run(sql`CREATE INDEX \`about_page_globals__status_idx\` ON \`about_page_globals\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`_about_page_globals_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`version_about_header_text\` text,
  	\`version_about_introductory_paragraph\` text,
  	\`version_about_process_header\` text,
  	\`version_about_testimonials_header\` text,
  	\`version_about_seo_title\` text,
  	\`version_about_seo_description\` text,
  	\`version_about_seo_keywords\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`snapshot\` integer,
  	\`published_locale\` text,
  	\`latest\` integer
  );
  `)
  await db.run(sql`CREATE INDEX \`_about_page_globals_v_version_version__status_idx\` ON \`_about_page_globals_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_about_page_globals_v_created_at_idx\` ON \`_about_page_globals_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_about_page_globals_v_updated_at_idx\` ON \`_about_page_globals_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_about_page_globals_v_snapshot_idx\` ON \`_about_page_globals_v\` (\`snapshot\`);`)
  await db.run(sql`CREATE INDEX \`_about_page_globals_v_published_locale_idx\` ON \`_about_page_globals_v\` (\`published_locale\`);`)
  await db.run(sql`CREATE INDEX \`_about_page_globals_v_latest_idx\` ON \`_about_page_globals_v\` (\`latest\`);`)
  await db.run(sql`CREATE TABLE \`our_work_page_globals\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`our_work_header_text\` text,
  	\`our_work_seo_title\` text,
  	\`our_work_seo_description\` text,
  	\`our_work_seo_keywords\` text,
  	\`_status\` text DEFAULT 'draft',
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `)
  await db.run(sql`CREATE INDEX \`our_work_page_globals__status_idx\` ON \`our_work_page_globals\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`_our_work_page_globals_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`version_our_work_header_text\` text,
  	\`version_our_work_seo_title\` text,
  	\`version_our_work_seo_description\` text,
  	\`version_our_work_seo_keywords\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`snapshot\` integer,
  	\`published_locale\` text,
  	\`latest\` integer
  );
  `)
  await db.run(sql`CREATE INDEX \`_our_work_page_globals_v_version_version__status_idx\` ON \`_our_work_page_globals_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_our_work_page_globals_v_created_at_idx\` ON \`_our_work_page_globals_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_our_work_page_globals_v_updated_at_idx\` ON \`_our_work_page_globals_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_our_work_page_globals_v_snapshot_idx\` ON \`_our_work_page_globals_v\` (\`snapshot\`);`)
  await db.run(sql`CREATE INDEX \`_our_work_page_globals_v_published_locale_idx\` ON \`_our_work_page_globals_v\` (\`published_locale\`);`)
  await db.run(sql`CREATE INDEX \`_our_work_page_globals_v_latest_idx\` ON \`_our_work_page_globals_v\` (\`latest\`);`)
  await db.run(sql`CREATE TABLE \`contact_page_globals\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`contact_header_text\` text,
  	\`contact_contact_explanation_text\` text,
  	\`contact_submit_button_text\` text,
  	\`contact_seo_title\` text,
  	\`contact_seo_description\` text,
  	\`contact_seo_keywords\` text,
  	\`_status\` text DEFAULT 'draft',
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `)
  await db.run(sql`CREATE INDEX \`contact_page_globals__status_idx\` ON \`contact_page_globals\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`_contact_page_globals_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`version_contact_header_text\` text,
  	\`version_contact_contact_explanation_text\` text,
  	\`version_contact_submit_button_text\` text,
  	\`version_contact_seo_title\` text,
  	\`version_contact_seo_description\` text,
  	\`version_contact_seo_keywords\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`snapshot\` integer,
  	\`published_locale\` text,
  	\`latest\` integer
  );
  `)
  await db.run(sql`CREATE INDEX \`_contact_page_globals_v_version_version__status_idx\` ON \`_contact_page_globals_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_contact_page_globals_v_created_at_idx\` ON \`_contact_page_globals_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_contact_page_globals_v_updated_at_idx\` ON \`_contact_page_globals_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_contact_page_globals_v_snapshot_idx\` ON \`_contact_page_globals_v\` (\`snapshot\`);`)
  await db.run(sql`CREATE INDEX \`_contact_page_globals_v_published_locale_idx\` ON \`_contact_page_globals_v\` (\`published_locale\`);`)
  await db.run(sql`CREATE INDEX \`_contact_page_globals_v_latest_idx\` ON \`_contact_page_globals_v\` (\`latest\`);`)
  await db.run(sql`CREATE TABLE \`sent_page_globals\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`contact_sent_success_header\` text,
  	\`contact_sent_success_text\` text,
  	\`contact_sent_button_text\` text,
  	\`contact_sent_success_icon_animation\` text DEFAULT 'meow',
  	\`_status\` text DEFAULT 'draft',
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `)
  await db.run(sql`CREATE INDEX \`sent_page_globals__status_idx\` ON \`sent_page_globals\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`_sent_page_globals_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`version_contact_sent_success_header\` text,
  	\`version_contact_sent_success_text\` text,
  	\`version_contact_sent_button_text\` text,
  	\`version_contact_sent_success_icon_animation\` text DEFAULT 'meow',
  	\`version__status\` text DEFAULT 'draft',
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`snapshot\` integer,
  	\`published_locale\` text,
  	\`latest\` integer
  );
  `)
  await db.run(sql`CREATE INDEX \`_sent_page_globals_v_version_version__status_idx\` ON \`_sent_page_globals_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_sent_page_globals_v_created_at_idx\` ON \`_sent_page_globals_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_sent_page_globals_v_updated_at_idx\` ON \`_sent_page_globals_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_sent_page_globals_v_snapshot_idx\` ON \`_sent_page_globals_v\` (\`snapshot\`);`)
  await db.run(sql`CREATE INDEX \`_sent_page_globals_v_published_locale_idx\` ON \`_sent_page_globals_v\` (\`published_locale\`);`)
  await db.run(sql`CREATE INDEX \`_sent_page_globals_v_latest_idx\` ON \`_sent_page_globals_v\` (\`latest\`);`)
  await db.run(sql`CREATE TABLE \`service_page_globals\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`services_header_text\` text,
  	\`services_view_work_header\` text,
  	\`services_view_work_text\` text,
  	\`services_view_work_button_text\` text,
  	\`services_introductory_paragraph\` text,
  	\`services_seo_title\` text,
  	\`services_seo_description\` text,
  	\`services_seo_keywords\` text,
  	\`_status\` text DEFAULT 'draft',
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `)
  await db.run(sql`CREATE INDEX \`service_page_globals__status_idx\` ON \`service_page_globals\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`_service_page_globals_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`version_services_header_text\` text,
  	\`version_services_view_work_header\` text,
  	\`version_services_view_work_text\` text,
  	\`version_services_view_work_button_text\` text,
  	\`version_services_introductory_paragraph\` text,
  	\`version_services_seo_title\` text,
  	\`version_services_seo_description\` text,
  	\`version_services_seo_keywords\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`snapshot\` integer,
  	\`published_locale\` text,
  	\`latest\` integer
  );
  `)
  await db.run(sql`CREATE INDEX \`_service_page_globals_v_version_version__status_idx\` ON \`_service_page_globals_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_service_page_globals_v_created_at_idx\` ON \`_service_page_globals_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_service_page_globals_v_updated_at_idx\` ON \`_service_page_globals_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_service_page_globals_v_snapshot_idx\` ON \`_service_page_globals_v\` (\`snapshot\`);`)
  await db.run(sql`CREATE INDEX \`_service_page_globals_v_published_locale_idx\` ON \`_service_page_globals_v\` (\`published_locale\`);`)
  await db.run(sql`CREATE INDEX \`_service_page_globals_v_latest_idx\` ON \`_service_page_globals_v\` (\`latest\`);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`services_id\` integer REFERENCES services(id);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`projects_id\` integer REFERENCES projects(id);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`parent_services_id\` integer REFERENCES parent_services(id);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`testimonials_id\` integer REFERENCES testimonials(id);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`processes_id\` integer REFERENCES processes(id);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_services_id_idx\` ON \`payload_locked_documents_rels\` (\`services_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_projects_id_idx\` ON \`payload_locked_documents_rels\` (\`projects_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_services_id_idx\` ON \`payload_locked_documents_rels\` (\`parent_services_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_testimonials_id_idx\` ON \`payload_locked_documents_rels\` (\`testimonials_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_processes_id_idx\` ON \`payload_locked_documents_rels\` (\`processes_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`services_blocks_spacer_block\`;`)
  await db.run(sql`DROP TABLE \`services_blocks_single_column_center_rich_text_block\`;`)
  await db.run(sql`DROP TABLE \`services_blocks_bullet_point_block\`;`)
  await db.run(sql`DROP TABLE \`services_blocks_card_bullet_point_section\`;`)
  await db.run(sql`DROP TABLE \`services_blocks_button_block\`;`)
  await db.run(sql`DROP TABLE \`services_blocks_feature_card_block\`;`)
  await db.run(sql`DROP TABLE \`services\`;`)
  await db.run(sql`DROP TABLE \`_services_v_blocks_spacer_block\`;`)
  await db.run(sql`DROP TABLE \`_services_v_blocks_single_column_center_rich_text_block\`;`)
  await db.run(sql`DROP TABLE \`_services_v_blocks_bullet_point_block\`;`)
  await db.run(sql`DROP TABLE \`_services_v_blocks_card_bullet_point_section\`;`)
  await db.run(sql`DROP TABLE \`_services_v_blocks_button_block\`;`)
  await db.run(sql`DROP TABLE \`_services_v_blocks_feature_card_block\`;`)
  await db.run(sql`DROP TABLE \`_services_v\`;`)
  await db.run(sql`DROP TABLE \`projects_additional_images\`;`)
  await db.run(sql`DROP TABLE \`projects\`;`)
  await db.run(sql`DROP TABLE \`projects_rels\`;`)
  await db.run(sql`DROP TABLE \`_projects_v_version_additional_images\`;`)
  await db.run(sql`DROP TABLE \`_projects_v\`;`)
  await db.run(sql`DROP TABLE \`_projects_v_rels\`;`)
  await db.run(sql`DROP TABLE \`parent_services\`;`)
  await db.run(sql`DROP TABLE \`parent_services_rels\`;`)
  await db.run(sql`DROP TABLE \`_parent_services_v\`;`)
  await db.run(sql`DROP TABLE \`_parent_services_v_rels\`;`)
  await db.run(sql`DROP TABLE \`testimonials\`;`)
  await db.run(sql`DROP TABLE \`_testimonials_v\`;`)
  await db.run(sql`DROP TABLE \`processes\`;`)
  await db.run(sql`DROP TABLE \`_processes_v\`;`)
  await db.run(sql`DROP TABLE \`payload_kv\`;`)
  await db.run(sql`DROP TABLE \`home_page_globals\`;`)
  await db.run(sql`DROP TABLE \`_home_page_globals_v\`;`)
  await db.run(sql`DROP TABLE \`about_page_globals\`;`)
  await db.run(sql`DROP TABLE \`_about_page_globals_v\`;`)
  await db.run(sql`DROP TABLE \`our_work_page_globals\`;`)
  await db.run(sql`DROP TABLE \`_our_work_page_globals_v\`;`)
  await db.run(sql`DROP TABLE \`contact_page_globals\`;`)
  await db.run(sql`DROP TABLE \`_contact_page_globals_v\`;`)
  await db.run(sql`DROP TABLE \`sent_page_globals\`;`)
  await db.run(sql`DROP TABLE \`_sent_page_globals_v\`;`)
  await db.run(sql`DROP TABLE \`service_page_globals\`;`)
  await db.run(sql`DROP TABLE \`_service_page_globals_v\`;`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	\`media_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_payload_locked_documents_rels\`("id", "order", "parent_id", "path", "users_id", "media_id") SELECT "id", "order", "parent_id", "path", "users_id", "media_id" FROM \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`ALTER TABLE \`__new_payload_locked_documents_rels\` RENAME TO \`payload_locked_documents_rels\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`)
}
