class HobbySerializer < ActiveModel::Serializer
  attributes :id, :description, :description1, :description2, :description3
  has_one :user
end
