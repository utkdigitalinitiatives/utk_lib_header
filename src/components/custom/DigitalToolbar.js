import React, {Component} from 'react';
import { Button, Select, Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const options = [
    { key: 'collections', text: 'Collections', value: 'collections' },
    { key: 'items', text: 'Items', value: 'items' }
]

export class DigitalToolbar extends Component {

    render () {

        return (
            <div className="utk-digital-bar utk-digital-toolbar">
                <div className="container">
                    <form>
                        <div>
                            <Input type='text' placeholder='Searching digital.lib.utk.edu' action>
                                <input style={{ width: 240 }} />
                                <Select options={options} defaultValue='collections' />
                                <Button type='submit'>Go</Button>
                            </Input>
                        </div>
                        <div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}