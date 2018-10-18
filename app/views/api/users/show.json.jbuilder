json.user do
  json.partial! "api/users/user", user: @user
end

json.albums do
  json.array! @user.albums do |album|
    json.id album.id
    json.title album.title
    json.user @user.username
    json.cover_url album.cover_url
    json.description album.description
		json.userId album.user_id
		json.track_ids album.track_ids
  end
end