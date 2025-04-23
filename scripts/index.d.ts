import {} from "@minecraft/server";

declare module "@minecraft/server" {
    interface WorldBeforeEvents {
        readonly entityHurt: EntityHurtBeforeEventSignal;
    }

    export class EntityHurtBeforeEventSignal extends EntityHurtAfterEventSignal {
        private constructor();

        subscribe(
            callback: (arg0: EntityHurtBeforeEvent) => void,
        ): (arg0: EntityHurtBeforeEvent) => void;

        unsubscribe(
            callback: (arg0: EntityHurtBeforeEvent) => void,
        )
    }
    export interface EntityHurtBeforeEvent extends EntityHurtAfterEvent {
        cancel: boolean;
        readonly damage: number;
        readonly damageSource: EntityDamageSource;
        readonly hurtEntity: Entity;
        constructor(data: EntityHurtAfterEvent);
    }
}