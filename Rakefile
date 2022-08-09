require "bundler/setup"
require "jekyll/task/i18n"

Jekyll::Task::I18n.define do |task|
  # Set translate target locales.
  task.locales = ["ja"]
  # Set all *.md texts as translate target contents.
  task.files = Rake::FileList["**/*.md"]
  # Remove internal files from target contents.
  task.files -= Rake::FileList["_*/**/*.md"]
  task.files -= Rake::FileList["node_modules/**/*.md"]
  # Remove translated files from target contents.
  task.locales.each do |locale|
    task.files -= Rake::FileList["#{locale}/**/*.md"]
  end
end

task :default => "jekyll:i18n:translate"
