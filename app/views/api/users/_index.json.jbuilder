@users.each do |user|
  json.set! bench.id do
    json.partial! 'user', user: user
  end
end