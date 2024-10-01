import { _decorator, Component, Node, Prefab, input, Input, EventTouch, instantiate } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AttackController')
export class AttackController extends Component {
    //默认首字母大写，初始值会识别，如果冲突会以cocos面板为准 property是添加进去
    @property(Prefab)
    public bulletPrefab: Prefab = null
    // 预制体prefab 实例instance

    start() {
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this)
    }

    onTouchStart(event: EventTouch) {
        const bullet = instantiate(this.bulletPrefab)//访问自身属性的时候要使用this
        bullet.setParent(this.node)
    }

    update(deltaTime: number) {

    }
}

