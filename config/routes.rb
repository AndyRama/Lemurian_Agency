Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get '/legal', to: 'pages#legal', as: 'legal'
  get '/contact', to: 'pages#contact', as: 'contact'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
