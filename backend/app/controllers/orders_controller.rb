class OrdersController < ApplicationController

    def index
        @orders = Order.all
        render json: @orders, only: [:id, :user_id]
    end

    def show
        @order = Order.find(params[:id])
        render json: @order, only: [:id, :user_id]
    end
end
