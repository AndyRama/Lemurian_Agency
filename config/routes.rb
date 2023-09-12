Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get '/legal', to: 'pages#legal', as: 'legal'
  get '/contact', to: 'pages#contact', as: 'contact'
  get '/expertise', to: 'pages#expertise', as: 'expertise'
  get '/methodologie', to: 'pages#methodologie', as: 'methodologie'
  get '/clients', to: 'pages#clients', as: 'clients'
  get '/mobile', to: 'pages#mobile', as: 'mobile'


end
