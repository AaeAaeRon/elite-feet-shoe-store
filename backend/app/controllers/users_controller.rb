class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users, only: [:id, :name, :username]
    end

    def show
        @user = User.find(params[:id])
        render json: @user, only: [:id, :name, :username]
    end
end
