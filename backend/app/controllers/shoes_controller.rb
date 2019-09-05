class ShoesController < ApplicationController

    # before_action:current_shoe, only:[:show]
    def index
        @shoes = Shoe.all
        render json: @shoes, only: [:id, :img_url ,:name, :price, :category]


    end


    def show
        @shoe = Shoe.find(params[:id])
        render json: @shoe, only: [:id, :img_url ,:name, :price, :category]
        
    end

  
end
