class BioSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :address, :phone, :email, :linkedin
  has_one :user
end
