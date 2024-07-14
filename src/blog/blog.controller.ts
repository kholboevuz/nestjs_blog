import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BlogDto } from './dto/blog.dto';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly BlogService: BlogService) {}

  @HttpCode(200)
  @Get()
  async getAll() {
    return this.BlogService.getAllBlogs();
  }

  @HttpCode(201)
  @Post()
  async create(@Body() dto: BlogDto) {
    return this.BlogService.createBlog(dto);
  }

  @HttpCode(200)
  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.BlogService.getById(id);
  }

  @HttpCode(200)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: BlogDto) {
    return this.BlogService.updateBlog(dto, id);
  }

  @HttpCode(200)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.BlogService.deleteBlog(id);
  }
}
