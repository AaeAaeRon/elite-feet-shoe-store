class UsersController < ApplicationController

    # skip_before_action :check_authentication, only: [:create]

    def index
        @users = User.all
        render json: @users, only: [:id, :name, :username]
    end

    # def show
    #     @user = User.find(params[:id])
    #     render json: @user, only: [:id, :name, :username]
    # end

    ######### USER SIGN UP #########
    def create
        @user = User.create(user_params)

        # byebug
    
        if @user.valid?
            render json: { user: UserSerializer.new(@user) }, status: :created
        else
            render json: { error: 'failed to create user' }, status: :not_acceptable
        end

    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end 
end
