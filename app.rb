require 'rubygems'
require 'sinatra'
require 'json'

set :public_folder, 'public'

todos = []

get '/' do
	redirect 'index.html'
end

get '/todos' do
	content_type :json
	todos.to_json	
end

put '/todo' do
	content_type :json
	todos += [params['item']]
	true
end

