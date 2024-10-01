import { _decorator, Component, EventTouch, Input, input, Node } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('Test')
export class Test extends Component {
  start() {
    input.on(Input.EventType.TOUCH_START, this.onTouchStart, this)
    input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this)
    input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this)
  }

  onTouchStart(event: EventTouch) {
    console.log('touchStart', event.getLocation());
  }

  onTouchMove(event: EventTouch) {
    const moveScale = 0.05
    const pos = this.node.position
    this.node.setPosition(pos.x + event.getDeltaX() * moveScale, pos.y + event.getDeltaY() * moveScale, pos.z)
  }

  onTouchEnd(event: EventTouch) {
    console.log('touchStart', event.getLocation());
  }

  update(deltaTime: number) {

  }
}

