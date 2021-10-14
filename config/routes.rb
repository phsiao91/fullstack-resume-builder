Rails.application.routes.draw do
  resources :educations
  resources :introductions
  resources :work_histories
  resources :bios
  resources :users


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  delete "/userdelete", to: "users#destroy"
  patch "/userupdate", to: "users#update"
  post "/bios", to: "bios#create"
  get "/mybio", to: "bios#index"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/workhistories", to: "work_histories#create"
  get "/mywork", to: "work_histories#index"
  post "/tasks", to: "tasks#create"
  get "/mytask", to: "tasks#index"
  post "/skills", to: "skills#create"
  get "/myskill", to: "skills#show"
  post "/introductions", to: "introductions#create"
  get "/myintro", to: "introductions#index"
  post "/educations", to: "educations#create"
  get "/myeducation", to: "educations#index"

end
