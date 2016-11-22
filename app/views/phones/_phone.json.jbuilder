json.extract! phone, :id, :name, :home_number, :cell_number, :created_at, :updated_at
json.url phone_url(phone, format: :json)