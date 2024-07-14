import { Injectable } from '@nestjs/common';
import { BlogDto } from './dto/blog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Blog, BlogDocument } from './blog.schema';
import { Model } from 'mongoose';

@Injectable()
export class BlogService {
  blogs: BlogDto[];
  constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}

  async getAllBlogs() {
    return this.blogModel.find({});
  }

  async createBlog(dto: BlogDto) {
    return this.blogModel.create(dto);
  }

  async getById(id: string) {
    return this.blogModel.findById(id);
  }

  async updateBlog(dto: BlogDto, id: string) {
    return this.blogModel.findByIdAndUpdate(id, dto);
  }

  async deleteBlog(id: string) {
    return this.blogModel.findByIdAndDelete(id);
  }
}
