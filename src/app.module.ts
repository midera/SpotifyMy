import {Module} from '@nestjs/common';
import * as path from 'path';
import {MongooseModule} from '@nestjs/mongoose';
import {FileModule} from './file/file.module';
import {ServeStaticModule} from '@nestjs/serve-static';
import {TrackModule} from "./track/track.module";

@Module({
    imports: [
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
        MongooseModule.forRoot(
            'mongodb+srv://admin:admin@cluster0.innjv.mongodb.net/music-platform?retryWrites=true&w=majority',
        ),
        TrackModule,
        FileModule,
    ],
})
export class AppModule {
}
