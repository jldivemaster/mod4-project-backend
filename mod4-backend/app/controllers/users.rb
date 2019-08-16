
class Users < ApplicationController
   
    def index 
        @users = User.all
    end
    `` 
    def new
        @user = User.new
    end

    def update
        @user = User.Find(params[:id])
        @user.update(name: params[:name], username: params[:username], location: params[:location], mod: params[:mod_number])
        redirect_to user(@user)

    def create
        @user = User.new(name: params[:name],username: params[:username],location: params[:location],mod: params[:mod_number])
        if @user 
            User.save
            redirect_to users
        else 
            render new
        end
    end

    def destroy
        @user = User.Find(params[:id])
        @user.destroy
        redirect_to users
    end
  end