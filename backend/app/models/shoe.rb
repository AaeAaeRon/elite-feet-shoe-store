class Shoe < ApplicationRecord
    has_many orders through: selection 
end
