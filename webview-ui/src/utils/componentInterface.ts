export default interface IComponent {
    name: string,
    description?: string,
    content: any,
    popular?: boolean,
    template?: boolean
    id?: string
}