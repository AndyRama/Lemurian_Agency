class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[home legal contact expertise methodologie clients mobile]

  def home
  end

  def contact
  end

  def legal
  end

  def expertise
  end

  def methodologie
  end

  def clients
  end

  def mobile
  end
end
