/**
 * @author finnafinest_
 * @author Cennac
 */

import { world, WorldBeforeEvents, EntityHurtAfterEvent } from "@minecraft/server";

export class EntityHurtBeforeEventSignal extends EntityHurtBeforeEvent {

    /** @type {Set<(data: import('@minecraft/server').EntityHurtBeforeEvent) => void>} */
    listeners = new Set();

    constructor() { }

    subscribe(cb) {
        this.listeners.add(cb);
        return cb;
    }

    unsubscribe(cb) {
        return this.listeners.delete(cb);
    }

    run(data) {
        for (const cb of this.listeners) {
            cb(data);
        }
    }
}

class EntityHurtBeforeEvent {
    /**
     * @type {boolean}
     */
    #cancel = false;
    get cancel() { return this.#cancel };
    set cancel(v) {
        if (v == true) {
            //code here for cancel
        }
        return this.#cancel = v;
    };

    /**
     * @type {number}
     */
    damage;

    /**
     * @type {import('@minecraft/server').EntityDamageSource}
     */
    damageSource;

    /**
     * @type {import('@minecraft/server').Entity}
     */
    hurtEntity;

    /**@param {EntityHurtAfterEvent} data */
    constructor(data) {

        this.damage = data.damage;
        this.damageSource = data.damageSource;
        this.hurtEntity = data.hurtEntity;
    }
}

const entityHurtEvent = new EntityHurtBeforeEventSignal();
WorldBeforeEvents.prototype.entityHurt = entityHurtEvent;

world.afterEvents.entityHurt.subscribe((ev) => {
    const data = new EntityHurtBeforeEvent(ev);
    entityHurtEvent.run(data);
    if (data.cancel) {

    }
})


// Usage
world.beforeEvents.entityHurt.subscribe((event) => {
    const { damage, damageSource, hurtEntity } = event

    event.cancel = true;
})