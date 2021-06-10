const sDefault = `
speed = 0.0
voltage = 0.0
discrete_data1 = discrete_data2 = 0
speed_as = 0.0
mt1_voltage = mt2_voltage = mt1_current = mt2_current = 0
mt1_tr1_temp = mt1_tr2_temp = mt1_tr3_temp = mt1_tr4_temp = mt1_tr5_temp = mt1_tr6_temp = 0
mt1_diode_temp = 0
mt2_tr1_temp = mt2_tr2_temp = mt2_tr3_temp = mt2_tr4_temp = mt2_tr5_temp = mt2_tr6_temp = 0
mt2_diode_temp = 0
reserved = 0
`;

const sPack = `
pack_dt = base.decode_packtime(dat[1], oper_time)
discrete_data1 = dat[2]
discrete_data2 = dat[3]
speed_as = float(dat[4]) / 10.0
mt1_voltage = dat[5] * 2
mt2_voltage = dat[6]
mt1_current = dat[7]
mt2_current = dat[8]
mt1_tr1_temp = dat[9]
mt1_tr2_temp = dat[10]
mt1_tr3_temp = dat[11]
mt1_tr4_temp = dat[12]
mt1_tr5_temp = dat[13]
mt1_tr6_temp = dat[14]
mt1_diode_temp = dat[15]
mt2_tr1_temp = dat[16]
mt2_tr2_temp = dat[17]
mt2_tr3_temp = dat[18]
mt2_tr4_temp = dat[19]
mt2_tr5_temp = dat[20]
mt2_tr6_temp = dat[21]
mt2_diode_temp = dat[22]
`;

export { sPack, sDefault };
