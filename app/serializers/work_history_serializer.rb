class WorkHistorySerializer < ActiveModel::Serializer
  attributes :id, :title, :company, :start_date, :end_date
  has_one :user
end
