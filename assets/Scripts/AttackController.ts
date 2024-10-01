import { _decorator, Component, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AttackController')
export class AttackController extends Component {
    @property
    public maxNumberOfAttack: number = 100 //默认首字母大写，初始值会识别，如果冲突会以cocos面板为准 property是添加进去

    @property
    public testString: string = 'hello'

    @property(Node)
    public ground: Node = null

    @property(Prefab)
    public bulletPrefab: Prefab = null

    start() {

    }

    update(deltaTime: number) {

    }
}

