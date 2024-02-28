export class ItemSelectDto<T = any> {
    label?: string;
    value: T;
    styleClass?: string;
    icon?: string;
    title?: string;
    disabled?: boolean;
    clave?: string;
    extension?: string;
}
