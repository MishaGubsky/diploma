Rails.application.routes.draw do
  devise_for :users
  resources :articles
  resources :resources
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "resources#index"
  devise_scope :user do
    get '/users/sign_out',  :to => 'devise/sessions#destroy'
  end
end
