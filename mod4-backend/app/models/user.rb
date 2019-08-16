class User < ApplicationRecord
  has_many :notes

# Users will log in with validation on password.  Each user will be able to create their own notes.
# Admin column = true if user is Flatiron staff.
# Non-admin users only have notes/resources available where user.mod_number >= resource/note.mod_number.

#As of first commit, still need controller actions, routes for each model.
end
