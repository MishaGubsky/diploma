# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170525165252) do

  create_table "Articles_Authors", id: false, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer "article_id", null: false
    t.integer "author_id",  null: false
  end

  create_table "Articles_Categories", id: false, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer "article_id",  null: false
    t.integer "category_id", null: false
  end

  create_table "Articles_Keywords", id: false, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer "article_id", null: false
    t.integer "keyword_id", null: false
  end

  create_table "Articles_Tags", id: false, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer "article_id", null: false
    t.integer "tag_id",     null: false
  end

  create_table "articles", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.datetime "last_parsing_at"
    t.boolean  "processed",                     default: false
    t.string   "url"
    t.text     "title",           limit: 65535
    t.text     "text",            limit: 65535
    t.datetime "posted_at"
    t.datetime "created_at",                                    null: false
    t.datetime "updated_at",                                    null: false
    t.integer  "resource_id"
    t.index ["resource_id"], name: "index_articles_on_resource_id", using: :btree
  end

  create_table "author_social_networks", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "url"
    t.integer  "author_id"
    t.integer  "social_network_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.index ["author_id"], name: "index_author_social_networks_on_author_id", using: :btree
    t.index ["social_network_id"], name: "index_author_social_networks_on_social_network_id", using: :btree
  end

  create_table "authors", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "email"
    t.string   "full_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "categories", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "keywords", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "metrics", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "views",             default: 0
    t.integer  "likes",             default: 0
    t.integer  "shares",            default: 0
    t.integer  "comments",          default: 0
    t.integer  "impressions",       default: 0
    t.integer  "revision_id"
    t.integer  "social_network_id"
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
    t.integer  "reposts",           default: 0
    t.index ["revision_id"], name: "index_metrics_on_revision_id", using: :btree
    t.index ["social_network_id"], name: "index_metrics_on_social_network_id", using: :btree
  end

  create_table "resources", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "url"
    t.string   "module_name"
    t.boolean  "with_api",    default: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
  end

  create_table "revisions", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "site_own_metric_id"
    t.integer  "external_metrics_id"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.integer  "article_id"
    t.index ["article_id"], name: "index_revisions_on_article_id", using: :btree
    t.index ["external_metrics_id"], name: "index_revisions_on_external_metrics_id", using: :btree
    t.index ["site_own_metric_id"], name: "index_revisions_on_site_own_metric_id", using: :btree
  end

  create_table "social_networks", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tags", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "email",                  default: "",   null: false
    t.string   "encrypted_password",     default: "",   null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,    null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                            null: false
    t.datetime "updated_at",                            null: false
    t.integer  "resources_limit",        default: 1
    t.boolean  "can_download",           default: true
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  create_table "users_resources", id: false, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer "user_id"
    t.integer "resource_id"
    t.index ["resource_id"], name: "index_users_resources_on_resource_id", using: :btree
    t.index ["user_id"], name: "index_users_resources_on_user_id", using: :btree
  end

  add_foreign_key "articles", "resources"
  add_foreign_key "revisions", "articles"
end
