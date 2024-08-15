class Notes < ApplicationController
   
    def index 
        @notes = Note.all
    end
    `` 
    def new
        @note = Note.new
    end

    def update
        @note = Note.Find(params[:id])
        @note.update(title: params[:title], body: params[:body], mod_number: params[:mod_number])
        redirect_to note(@note)

    def create
        @user = Note.new(title: params[:title], body: params[:body], mod_number: params[:mod_number])
        if @user 
            Note.save
            redirect_to notes
        else 
            render new
        end
    end

    def destroy
        @note = Note.Find(params[:id])
        @note.destroy
        redirect_to notes
    end
  end