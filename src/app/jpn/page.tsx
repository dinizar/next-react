'use client'
import { useState } from 'react';
import { TableLowcode } from 'alurkerja-ui';

const Jpn = () => {
    const baseUrl = "https://kpm-sys.merapi.javan.id";
    const tableName = 'pengurusan-rekod-aktiviti-pemohon';
    const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 });
    const [renderState, setRenderState] = useState(0)
    const [search, setSearch] = useState<string>()
    const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()

    return (
        <TableLowcode
            baseUrl={baseUrl}
            tableName={tableName}
            renderState={renderState}
            setRenderState={setRenderState}
            pageConfig={pageConfig}
            setPageConfig={setPageConfig}
            search={search}
            setSearch={setSearch}
            filterBy={filterBy}
            setFilterBy={setFilterBy}
            title="Jpn"
            textSubmitButton="Simpan"
        />
    );
};

export default Jpn;