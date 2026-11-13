/**
 * 语音包清单
 * key 对应 audio/ 下的子目录名。加新包：建目录、这里加一行、拷贝同名文件进去。
 * @type {Object.<string, {name: string, desc: string}>}
 */
const VOICE_PACKS = {
    'x6_lingxiaoxuan_pro':              { name: '聆小璇', desc: '普通话女声' },
    'x6_lingfeiyi_pro':                 { name: '聆飞逸', desc: '普通话男声' },
    'x5_lingxiaotang_flow':             { name: '聆小糖', desc: '普通话女声' },
    'x5_lingyuzhao_flow':               { name: '聆玉昭', desc: '普通话女声' },
    'x6_lingxiaoyue_pro':               { name: '聆小玥', desc: '普通话女声' },
    'x6_lingyuyan_pro':                 { name: '聆玉言', desc: '普通话女声' },
    'x6_lingfeibo_pro':                 { name: '聆飞博', desc: '普通话男声' },
    'x6_lingxiaoying_pro':              { name: '聆小颖', desc: '普通话女声' },
    'x6_gaolengnanshen_pro':            { name: '高冷男神', desc: '普通话男声' },
    'x6_waiguodashu_pro':               { name: '外国人大叔', desc: '普通话男声' },
    'x6_dongmanshaonv_pro':             { name: '动漫少女', desc: '普通话女声' },
    'x6_lingxiaoxue_pro':               { name: '聆小雪', desc: '普通话女声' },
    'x6_lingbosong_pro':                { name: '聆伯松', desc: '普通话男声' },
    'x6_dudulibao_pro':                 { name: '少女可莉', desc: '普通话女声' },
    'x6_wumeinv_pro':                   { name: '妩媚姐姐', desc: '普通话女声' },
    'x6_huajidama_pro':                 { name: '滑稽大妈', desc: '普通话女声' },
    'x6_huoposhaonian_pro':             { name: '活泼少年', desc: '普通话男声' },
    'x6_taiqiangnuannan_pro':           { name: '台湾腔温柔男声', desc: '普通话男声' },
    'x6_xiangruiyingyu_pro':            { name: '商务殷语', desc: '普通话男声' },
    'x6_huanlemianbao_pro':             { name: '海绵宝宝', desc: '普通话男声' },
    'x6_cuishounvsheng_pro':            { name: '催收女声', desc: '普通话女声' },
    'x6_yingxiaonv_pro':                { name: '营销女声', desc: '普通话女声' },
    'x6_wennuancixingnansheng_mini':    { name: '温暖磁性男声', desc: '普通话男声' },
    'x6_xiaonaigoudidi_mini':           { name: '小奶狗弟弟', desc: '普通话男声' },
    'x6_shibingnvsheng_mini':           { name: '士兵女声', desc: '普通话女声' },
    'x6_kongbunvsheng_mini':            { name: '恐怖女声', desc: '普通话女声' },
    'x6_yulexinwennvsheng_mini':        { name: '娱乐新闻女声', desc: '普通话女声' },
    'x6_wenrounansheng_mini':           { name: '温柔男声', desc: '普通话男声' },
    'x6_jingqudaolannvsheng_mini':      { name: '景区导览女声', desc: '普通话女声' },
    'x6_daqixuanchuanpiannansheng_mini':{ name: '大气宣传片男声', desc: '普通话男声' },
    'x6_gufengxianv_mini':              { name: '古风侠女', desc: '普通话女声' },
    'x7_langxiao_pro':                  { name: '朗霄', desc: '普通话男声' },
    'x7_susu_pro':                      { name: '苏苏老师', desc: '普通话女声' },
    'x7_xinchang_pro':                  { name: '欣畅', desc: '普通话女声' },
    'x7_yachen_pro':                    { name: '雅晨', desc: '普通话女声' },
    'x7_yaxi_pro':                      { name: '雅夕', desc: '普通话女声' }
};
;