json.user do
  json.partial! "api/users/user", user: @user
end

json.albums do
  json.array! @user.albums do |album|
    json.id album.id
    json.title album.title
    json.user @user.username
    json.description album.description
    json.user_id album.user_id
  end
end