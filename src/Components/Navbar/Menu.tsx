import { h, VNode, Component } from 'preact'
import { MenuItem, MenuGroup } from '../Menu/index'

export interface NavbarMenuProps {
    id?: string
    isActive?: boolean
    start?: MenuGroup[]
    end?: (VNode | MenuGroup)[]
}

const Menus = (start, className) => <div className={className}>
    {start.map((item, i) => item.list ? <div key={'' + i} className="navbar-item has-dropdown is-hoverable">
        <a key={'' + i} className="navbar-item navbar-link" href={item.href}>
            {item.label}
        </a>
        <div className="navbar-dropdown is-boxed">
            {item.list.map(m => <a key={m.key} title={m.title} href={m.href} className="navbar-item">
                {m.item}
            </a>)}
        </div>
    </div> : <a key={'' + i} className="navbar-item" href={item.href}>
            {item.label}
        </a>)}
</div>

export default ({ id, start, end, isActive }: NavbarMenuProps) => <div id={id} className={'navbar-menu' + (isActive ? ' is-active' : '')}>
    {start && Menus(start, 'navbar-start')}
    {end && (Array.isArray(end) ? Menus(end, 'navbar-end') : <div className="navbar-end">{end}</div>)}
</div>