import * as fabric from "fabric";

export interface CustomFabricObject<T extends fabric.Object>
  extends fabric.Object {
  objectId?: string;
}

export interface CustomFabricCanvas extends fabric.Canvas {
  _objects: CustomFabricObject<fabric.Object>[];
}

export interface CanvasMouseEvent {
  e: MouseEvent;
  target?: fabric.Object;
  pointer?: fabric.Point;
}
