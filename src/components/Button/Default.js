import React from 'react'
import classNames from 'classnames'
import { Icon } from '../../icons'

const Default = ({text, size = "md", rounded = "md", icon = "", variant = "default", backgroundColor = "rgb(70, 49, 129)", color = "rgb(229 231 235)", onClick}) => {

    if (variant === 'colored') {
        return (
            <button
                onClick={onClick}
                className={classNames({
                    "npoqui-btn": true,
                    "npoqui-btn-lg": size === "lg",
                    "npoqui-btn-sm": size === "sm",
                    "npoqui-rounded-full": rounded === "full",
                    "npoqui-rounded-lg": rounded === "lg",
                    "npoqui-rounded-sm": rounded === "sm",
                    "npoqui-btn-icon": icon,
                    "npoqui-btn-icon-only": !text && icon,
                })}
                variant={variant}
                style={{
                    '--backgroundColor': backgroundColor,
                    '--color': color
                }}
            >
                {
                    icon && 
                    <Icon name={icon} size={size === "lg" ? 40 : size === "sm" ? 20 : 30} />
                }
                {
                    text &&
                    text
                }
            </button>
        )
    }

    return (
        <button
            onClick={onClick}
            className={classNames({
                "npoqui-btn": true,
                "npoqui-btn-lg": size === "lg",
                "npoqui-btn-sm": size === "sm",
                "npoqui-rounded-full": rounded === "full",
                "npoqui-rounded-lg": rounded === "lg",
                "npoqui-rounded-sm": rounded === "sm",
                "npoqui-btn-icon": icon,
                "npoqui-btn-icon-only": !text && icon,
            })}
            variant={variant}
        >
            {
                icon && 
                <Icon name={icon} size={size === "lg" ? 40 : size === "sm" ? 20 : 30} />
            }
            {
                text &&
                text
            }
        </button>
    )
}

export default Default