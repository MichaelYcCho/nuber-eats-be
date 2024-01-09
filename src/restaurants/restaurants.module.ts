import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Restaurant } from './entities/restaurant.entity'
import { RestaurantResolver } from './restaurants.resolver'
import { RestaurantService } from './restaurants.service'
import { Category } from './entities/category.entity'
import { CategoryRepository } from './repositories/category.repository'

@Module({
    imports: [TypeOrmModule.forFeature([Restaurant, CategoryRepository])],
    providers: [RestaurantResolver, RestaurantService],
})
export class RestaurantsModule {}
