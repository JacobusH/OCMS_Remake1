export interface ImageInterface {
    thumbnail?: any; // image src for the thumbnail
    image?: any; // image src for the image
    text?: string; // optional text to show for the image
    [propName: string]: any;
};