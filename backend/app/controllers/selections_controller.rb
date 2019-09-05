class SelectionsController < ApplicationController

    def index
        @selections = Selection.all
        render json: @selections, only: [:id, :shoe_id, :order_id ]
    end

    def show
        @selection = Selection.find(params[:id])
        render json: @selection, only: [:id, :shoe_id, :order_id]
    end
end
