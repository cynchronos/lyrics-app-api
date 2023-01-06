import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document} from 'mongoose';

export const LyricsDocument = Lyrics & Document;

@Schema()
export class Lyrics {
    @Prop({ required: true, type: String })
    title;

    @Prop({ required: true, type: String })
    artist;

    @Prop({ required: true, type: String })
    genre;

    @Prop({ required: true, type: String })
    content;
}

export const LyricsSchema = SchemaFactory.createForClass(Lyrics);