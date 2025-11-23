
/*<![CDATA[*/
    /* BISMILLAH HIRROHMAAN NIRROHIIM*/
	
	function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

    var ahliwaris    = new Array();

    /* ENABLE OR DISABLED FOR CHECKED */
    var ahliwaris_1  = new Array(6,7,11,12,13,14,15,16,17,18,19,20,21,22,23,24);
    var ahliwaris_2  = new Array(15,16,23,24);
    var ahliwaris_3  = new Array(23,24);
    var ahliwaris_4  = new Array(8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24);
    var ahliwaris_5  = new Array(9,10,23,24);
    var ahliwaris_6  = new Array(1,11,12,13,14,15,16,17,18,19,20,21,22,23,24);
    var ahliwaris_7  = new Array(1,15,16,23,24);
    var ahliwaris_8  = new Array(4,11,12,13,14,15,16,17,18,19,20,21,22,23,24);
    var ahliwaris_9  = new Array(4,5,23,24);
    var ahliwaris_10 = new Array(5,23,24);
    var ahliwaris_11 = new Array(1,4,6,8,13,14,17,18,19,20,21,22,23,24);
    var ahliwaris_12 = new Array(1,4,6,8,23,24);
    var ahliwaris_13 = new Array(1,4,6,8,11,17,18,19,20,21,22,23,24);
    var ahliwaris_14 = new Array(1,4,6,8,11,23,24);
    var ahliwaris_15 = new Array(1,2,4,6,7,8,23,24);
    var ahliwaris_16 = new Array(1,4,6,7,8,23,24);
    var ahliwaris_17 = new Array(1,4,6,8,11,13,18,19,20,21,22,23,24);
    var ahliwaris_18 = new Array(1,4,6,8,11,13,17,19,20,21,22,23,24);
    var ahliwaris_19 = new Array(1,4,6,8,11,13,17,18,20,21,22,23,24);
    var ahliwaris_20 = new Array(1,4,6,8,11,13,17,18,19,21,22,23,24);
    var ahliwaris_21 = new Array(1,4,6,8,11,13,17,18,19,20,22,23,24);
    var ahliwaris_22 = new Array(1,4,6,8,11,13,17,18,19,20,21,23,24);
    var ahliwaris_23 = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22);
    var ahliwaris_24 = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22);
    var ahliwaris_jk = new Array(0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1);   /* Laki-laki 0, Wanita 1 */

    var jml_ahliwaris= new Array(24);
    /* ex. 1/2 */
    var dv1_ahliwaris= new Array(24);    /* for. 1 */
    var dv2_ahliwaris= new Array(24);    /* for. 2 */

    var dv1_ahliwaris_ashabah= new Array(24);    /* for. 1 */
    var dv2_ahliwaris_ashabah= new Array(24);    /* for. 2 */

    var cal_ahliwaris= new Array(24);
    var ashabah = new Array(24);
    var msg_error

    function init_array(){
      ahliwaris = Array(0);
    }

    function init_jml_ahliwaris(){
      for (I = 0; I < jml_ahliwaris.length; I++){
        jml_ahliwaris[I] = 0;
        dv1_ahliwaris[I] = 0;
        dv2_ahliwaris[I] = 1;
        cal_ahliwaris[I] = 0;
        dv1_ahliwaris_ashabah[I] = 0;
        dv2_ahliwaris_ashabah[I] = 1;
        ashabah[I] = 0;
      }
    }

    function calculate_hartawarisan(){
      this_TotalHarta = parseInt(document.getElementById('TotalHarta').value);
      this_PengurusanJenazah = parseInt(document.getElementById('PengurusanJenazah').value);
      this_PembayaranHutang = parseInt(document.getElementById('PembayaranHutang').value);
      this_Wasiat = parseInt(document.getElementById('Wasiat').value);
      this_HartaWarisan = 0;
      document.getElementById('TotalHarta').style.color = '';
      document.getElementById('PengurusanJenazah').style.color = '';
      document.getElementById('PembayaranHutang').style.color = '';
      document.getElementById('Wasiat').style.color = '';
      document.getElementById('HartaWarisan').value = this_HartaWarisan;
      if (isNaN(this_TotalHarta)){
        document.getElementById('TotalHarta').style.color = '#FFCCCC';
        this_TotalHarta = 0;
      }

      if (isNaN(this_PengurusanJenazah)){
        document.getElementById('PengurusanJenazah').style.color = '#FFCCCC';
        this_PengurusanJenazah = 0;
      }

      if (isNaN(this_PembayaranHutang)){
        document.getElementById('PembayaranHutang').style.color = '#FFCCCC';
        this_PembayaranHutang = 0;
      }

      if (isNaN(this_Wasiat)){
       document.getElementById('Wasiat').style.color = '#FFCCCC';
       this_Wasiat = 0;
      }

      if ((this_Wasiat > (this_TotalHarta / 3)) && (this_Wasiat > 0)){
       window.alert('Nilai Wasiat tidak boleh lebih dari 1/3 Harta Total');
       document.getElementById('Wasiat').value = '0';
       this_Wasiat = 0;
      }

      this_HartaWarisan = this_TotalHarta - (this_PengurusanJenazah+this_PembayaranHutang+this_Wasiat);
      document.getElementById('HartaWarisan').value = this_HartaWarisan;
    }

    function change_jeniskelamin(){
      if (document.getElementById('JenisKelamin').value == 0){
        document.getElementById('l_ahliwaris_3').textContent = 'Istri';
        document.getElementById('cb_ahliwaris_3').style.visibility = "";
      }else{
        document.getElementById('l_ahliwaris_3').textContent = 'Suami';
        document.getElementById('cb_ahliwaris_3').style.visibility = "hidden";
      }
    }

    function set_change_cb(idx){
      if (!document.getElementById('ch_ahliwaris_'+idx).checked){
        document.getElementById('cb_ahliwaris_'+idx).value = 0;
        document.getElementById('cb_ahliwaris_'+idx).disabled = true;
      }else{
        document.getElementById('cb_ahliwaris_'+idx).disabled = false;
        document.getElementById('cb_ahliwaris_'+idx).value = 1;
      }
    }

    function add_item_cb(this_cb,jml){
      for (Ix = 0; Ix <= jml; Ix++){
        this_cb.options[Ix] = new Option(Ix,Ix,false);
      }
    }


    function init_faraid(){

      for (I = 1; I <= 24; I++){
        if (I != 3){
          add_item_cb(document.getElementById('cb_ahliwaris_'+I),50);
        }else{
          add_item_cb(document.getElementById('cb_ahliwaris_'+I),4);
        }
      }

      for (I = 1; I <= 24; I++){
        document.getElementById('ch_ahliwaris_'+I).disabled = false;
        document.getElementById('ch_ahliwaris_'+I).checked = false;
        document.getElementById('cb_ahliwaris_'+I).disabled = true;
      }
      init_jml_ahliwaris();
      msg_error = '';
    }

    function on_ch_ahliwaris(){
      for (I = 1; I <= 24; I++){
        document.getElementById('ch_ahliwaris_'+I).disabled = false;
      }
      init_array();

      if (document.getElementById('ch_ahliwaris_1').checked){
        ahliwaris = ahliwaris.concat(ahliwaris,ahliwaris_1);
      }

      if (document.getElementById('ch_ahliwaris_2').checked){
        ahliwaris = ahliwaris.concat(ahliwaris,ahliwaris_2);
      }

      if (document.getElementById('ch_ahliwaris_3').checked){
        ahliwaris = ahliwaris.concat(ahliwaris,ahliwaris_3);
      }
      if (document.getElementById('ch_ahliwaris_4').checked){
        ahliwaris = ahliwaris.concat(ahliwaris,ahliwaris_4);
      }

      if (document.getElementById('ch_ahliwaris_5').checked){
        ahliwaris = ahliwaris.concat(ahliwaris,ahliwaris_5);
      }

      if (document.getElementById('ch_ahliwaris_6').checked){
        ahliwaris = ahliwaris.concat(ahliwaris,ahliwaris_6);
      }
      if (document.getElementById('ch_ahliwaris_7').checked){
        ahliwaris = ahliwaris.concat(ahliwaris,ahliwaris_7);
      }

      if (document.getElementById('ch_ahliwaris_8').checked){
        ahliwaris = ahliwaris.concat(ahliwaris,ahliwaris_8);
      }

      if (document.getElementById('ch_ahliwaris_9').checked){
        ahliwaris = ahliwaris.concat(ahliwaris,ahliwaris_9);
      }
      if (document.getElementById('ch_ahliwaris_10').checked){
        ahliwaris = ahliwaris.concat(ahliwaris,ahliwaris_10);
      }

      if (document.getElementById('ch_ahliwaris_11').checked){
        ahliwaris = ahliwaris.concat(ahliwaris,ahliwaris_11);
      }

      if (document.getElementById('ch_ahliwaris_12').checked){
        ahliwaris = ahliwaris.concat(ahliwaris,ahliwaris_12);
      }
      if (document.getElementById('ch_ahliwaris_13').checked){
        ahliwaris = ahliwaris.concat(ahliwaris,ahliwaris_13);
      }

      if (document.getElementById('ch_ahliwaris_14').checked){
        ahliwaris = ahliwaris.concat(ahliwaris,ahliwaris_14);
      }

      if (document.getElementById('ch_ahliwaris_15').checked){
        ahliwaris = ahliwaris.concat(ahliwaris,ahliwaris_15);
      }
      if (document.getElementById('ch_ahliwaris_16').checked){
        ahliwaris = ahliwaris.concat(ahliwaris,ahliwaris_16);
      }

      if (document.getElementById('ch_ahliwaris_17').checked){
        ahliwaris = ahliwaris.concat(ahliwaris,ahliwaris_17);
      }

      if (document.getElementById('ch_ahliwaris_18').checked){
        ahliwaris = ahliwaris.concat(ahliwaris,ahliwaris_18);
      }
      if (document.getElementById('ch_ahliwaris_19').checked){
        ahliwaris = ahliwaris.concat(ahliwaris,ahliwaris_19);
      }
      if (document.getElementById('ch_ahliwaris_20').checked){
        ahliwaris = ahliwaris.concat(ahliwaris,ahliwaris_20);
      }

      if (document.getElementById('ch_ahliwaris_21').checked){
        ahliwaris = ahliwaris.concat(ahliwaris,ahliwaris_21);
      }

      if (document.getElementById('ch_ahliwaris_22').checked){
        ahliwaris = ahliwaris.concat(ahliwaris,ahliwaris_22);
      }
      if (document.getElementById('ch_ahliwaris_23').checked){
        ahliwaris = ahliwaris.concat(ahliwaris,ahliwaris_23);
      }

      if (document.getElementById('ch_ahliwaris_24').checked){
        ahliwaris = ahliwaris.concat(ahliwaris,ahliwaris_24);
      }

      for (I = 0; I < ahliwaris.length; I++){
        document.getElementById('ch_ahliwaris_'+ahliwaris[I]).disabled = true;
        window.focus();
      }
    }

    function input_jml_ahliwaris(){
      for (I = 1; I <= 24; I++){
        if (document.getElementById('ch_ahliwaris_'+I).checked){
          if (document.getElementById('cb_ahliwaris_'+I).value > 0){
            jml_ahliwaris[I-1] = document.getElementById('cb_ahliwaris_'+I).value;
          }else{
            msg_error = 'Ahli Waris : ' + document.getElementById('l_ahliwaris_'+I).innerHTML + ' Jml ' + document.getElementById('cb_ahliwaris_'+I).value;
            break;
          }

        }else{
          jml_ahliwaris[I-1] = 0;
          document.getElementById('cb_ahliwaris_'+I).value = 0;
        }
      }
    }

    function cek_other_ahliwaris(idx_self){
      passsed = false;
      for (I = 1; I <= 24; I++){
        if (idx_self != I){
          if (document.getElementById('ch_ahliwaris_'+I).checked){
            passsed = false;
            break;
          }else{
            passsed = true;
          }
        }
      }

      return passsed;
    }

    function AhliWaris_SuamiIstri(){
      /* SUAMI / ISTRI */
      if (document.faraid.ch_ahliwaris_3.checked){
        if (document.faraid.JenisKelamin.value == 1){
          /* MAYIT WANITA */
          if ((document.faraid.ch_ahliwaris_1.checked)
          ||  (document.faraid.ch_ahliwaris_2.checked)
          ||  (document.faraid.ch_ahliwaris_6.checked)
          ||  (document.faraid.ch_ahliwaris_7.checked)){
            dv1_ahliwaris[2] = 6;   /* 1/4 */
            dv2_ahliwaris[2] = 24;
          }else{
            dv1_ahliwaris[2] = 12;  /* 1/2 */
            dv2_ahliwaris[2] = 24;
          }
        }else{
          if (document.faraid.JenisKelamin.value == 0){
            /* MAYIT LAKI-LAKI */
            if ((document.faraid.ch_ahliwaris_1.checked)
            ||  (document.faraid.ch_ahliwaris_2.checked)
            ||  (document.faraid.ch_ahliwaris_6.checked)
            ||  (document.faraid.ch_ahliwaris_7.checked)){
              dv1_ahliwaris[2] = 3;     /* 1/8 */
              dv2_ahliwaris[2] = 24;
            }else{
              dv1_ahliwaris[2] = 6;     /* 1/4 */
              dv2_ahliwaris[2] = 24;
            }
          }
        }
      }
    }

    function AhliWaris_Bapak(){
      /* BAPAK */
      if (document.faraid.ch_ahliwaris_4.checked){
        if ((document.faraid.ch_ahliwaris_1.checked)
        || (document.faraid.ch_ahliwaris_6.checked)){
          dv1_ahliwaris[3] = 4;     /* 1/6 */
          dv2_ahliwaris[3] = 24;
        }else{
          if ((document.faraid.ch_ahliwaris_2.checked)
          || (document.faraid.ch_ahliwaris_7.checked)){
            dv1_ahliwaris[3] = 4;   /* 1/6 */
            dv2_ahliwaris[3] = 24;
            ashabah[3] = 1;
          }else{
            ashabah[3] = 1;
          }
        }
      }
    }

    function AhliWaris_Kakek(){
      /* BAPAK */
      if (document.faraid.ch_ahliwaris_8.checked){
        if ((document.faraid.ch_ahliwaris_1.checked)
        || (document.faraid.ch_ahliwaris_6.checked)){
          dv1_ahliwaris[7] = 4;     /* 1/6 */
          dv2_ahliwaris[7] = 24;
        }else{
          if ((document.faraid.ch_ahliwaris_2.checked)
          || (document.faraid.ch_ahliwaris_7.checked)){
            dv1_ahliwaris[7] = 4;   /* 1/6 */
            dv2_ahliwaris[7] = 24;
            ashabah[7] = 1;
          }else{
            ashabah[7] = 1;
          }
        }
      }
    }

    function AhliWaris_Ibu(){
      /* IBU */
      if (document.faraid.ch_ahliwaris_5.checked){
        if ((!document.faraid.ch_ahliwaris_1.checked)
        && (!document.faraid.ch_ahliwaris_2.checked)){
          dv1_ahliwaris[4] = 8;     /* 1/3 */
          dv2_ahliwaris[4] = 24;
        }else{
          if ((document.faraid.ch_ahliwaris_1.checked)
          || (document.faraid.ch_ahliwaris_2.checked)){
            dv1_ahliwaris[4] = 4;   /* 1/6 */
            dv2_ahliwaris[4] = 24;
          }else{
            if ((!document.faraid.ch_ahliwaris_1.checked)
            || (!document.faraid.ch_ahliwaris_2.checked)
            || (!document.faraid.ch_ahliwaris_6.checked)
            || (!document.faraid.ch_ahliwaris_7.checked)){
              if ((document.faraid.ch_ahliwaris_3.checked)
              &&  (document.faraid.ch_ahliwaris_4.checked)
              &&  (document.faraid.ch_ahliwaris_5.checked)){
                if (document.faraid.JenisKelamin.value == 0){
                  /* MAYIT WANITA */
                  dv1_ahliwaris[4] = 8;     /* 1/3 */
                  dv2_ahliwaris[4] = 24;
                }else{
                  /* MAYIT LAKI - LAKI */
                  dv1_ahliwaris[4] = 6;     /* 1/4 */
                  dv2_ahliwaris[4] = 24;
                }
              }else{
                n = document.faraid.cb_ahliwaris_11.value + document.faraid.cb_ahliwaris_12.value +
                    document.faraid.cb_ahliwaris_13.value + document.faraid.cb_ahliwaris_14.value +
                    document.faraid.cb_ahliwaris_15.value + document.faraid.cb_ahliwaris_16.value;

                if (n > 1){
                  dv1_ahliwaris[4] = 4;     /* 1/6 */
                  dv2_ahliwaris[4] = 24;
                }
              }
            }
          }
        }
      }
    }

    function AhliWaris_NenekBapak(){
      /* NENEK BAPAK */
      if (document.faraid.ch_ahliwaris_9.checked){
        dv1_ahliwaris[8] = 4;       /* 1/6 */
        dv2_ahliwaris[8] = 24;
        if (document.faraid.ch_ahliwaris_10.checked){
          dv1_ahliwaris[8] = 1 * 1;   /* 1/6 : 2 */
          dv2_ahliwaris[8] = 24 * 2;
        }
      }
    }

    function AhliWaris_NenekIbu(){
      /* NENEK IBU */
      if (document.faraid.ch_ahliwaris_10.checked){
        dv1_ahliwaris[9] = 4;       /* 1/6 */
        dv2_ahliwaris[9] = 24;
        if (document.faraid.ch_ahliwaris_9.checked){
          dv1_ahliwaris[9] = 1 * 1;   /* 1/6 : 2 */
          dv2_ahliwaris[9] = 24 * 2;
        }
      }
    }

    function AhliWaris_AnakLaki(){
      if (document.faraid.ch_ahliwaris_1.checked){
        ashabah[0] = 1;
      }
    }

    function AhliWaris_CucuLaki(){
      if (document.faraid.ch_ahliwaris_6.checked){
        ashabah[5] = 1;
      }
    }

    function AhliWaris_AnakWanita(){
      if (document.faraid.ch_ahliwaris_2.checked){
        if ((!document.faraid.ch_ahliwaris_1.checked)
        && (document.faraid.cb_ahliwaris_2.value == 1)){
          dv1_ahliwaris[1] = 12;     /* 1/2 */
          dv2_ahliwaris[1] = 24;
        }else{
          if ((!document.faraid.ch_ahliwaris_1.checked)
          && (document.faraid.cb_ahliwaris_2.value > 1)){
            dv1_ahliwaris[1] = 16;   /* 2/3 */
            dv2_ahliwaris[1] = 24;
          }else{
            ashabah[1] = 1;
          }
        }
      }
    }

    function AhliWaris_CucuWanita(){
      if (document.faraid.ch_ahliwaris_7.checked){
        if ((!document.faraid.ch_ahliwaris_1.checked)
        && (!document.faraid.ch_ahliwaris_2.checked)
        && (!document.faraid.ch_ahliwaris_6.checked)
        && (document.faraid.cb_ahliwaris_7.value == 1)){
          dv1_ahliwaris[6] = 12;     /* 1/2 */
          dv2_ahliwaris[6] = 24;
        }else{
          if ((!document.faraid.ch_ahliwaris_1.checked)
          && (document.faraid.cb_ahliwaris_7.value > 1)){
            dv1_ahliwaris[6] = 16;   /* 2/3 */
            dv2_ahliwaris[6] = 24;
          }else{
            ashabah[6] = 1;
          }
        }
      }
    }

    function AhliWaris_SaudaraKandungLaki(){
      if (document.faraid.ch_ahliwaris_11.checked){
        if ((document.faraid.ch_ahliwaris_2.checked)
        && (document.faraid.ch_ahliwaris_3.checked)
        && (document.faraid.ch_ahliwaris_5.checked)
        && (document.faraid.cb_ahliwaris_7.checked)
        && (document.faraid.ch_ahliwaris_9.checked)
        && (document.faraid.ch_ahliwaris_10.checked)
        && (!document.faraid.ch_ahliwaris_4.checked)
        && (!document.faraid.ch_ahliwaris_8.checked)
        && (!document.faraid.ch_ahliwaris_1.checked)
        && (!document.faraid.ch_ahliwaris_6.checked)){
          dv1_ahliwaris[10] = 8;    /* 1/3 */
          dv2_ahliwaris[10] = 24;
        }else{
          if ((document.faraid.ch_ahliwaris_4.checked)
          || (document.faraid.ch_ahliwaris_8.checked)
          || (document.faraid.ch_ahliwaris_1.checked)
          || (document.faraid.ch_ahliwaris_6.checked)){
            /* MAHJUB */
          }else{
            ashabah[10] = 1;
          }
        }
      }
    }

    function AhliWaris_SaudaraKandungWanita(){
      if (document.faraid.ch_ahliwaris_12.checked){
        if ((!document.faraid.ch_ahliwaris_2.checked)
        && (!document.faraid.ch_ahliwaris_7.checked)
        && (!document.faraid.ch_ahliwaris_1.checked)
        && (!document.faraid.ch_ahliwaris_6.checked)
        && (!document.faraid.ch_ahliwaris_4.checked)
        && (!document.faraid.ch_ahliwaris_8.checked)
        && (document.faraid.cb_ahliwaris_12.value == 1)
        && (!document.faraid.ch_ahliwaris_11.checked)){
          dv1_ahliwaris[11] = 12;    /* 1/2 */
          dv2_ahliwaris[11] = 24;
        }else{
          if ((!document.faraid.ch_ahliwaris_2.checked)
          && (!document.faraid.ch_ahliwaris_7.checked)
          && (!document.faraid.ch_ahliwaris_1.checked)
          && (!document.faraid.ch_ahliwaris_6.checked)
          && (!document.faraid.ch_ahliwaris_4.checked)
          && (!document.faraid.ch_ahliwaris_8.checked)
          && (document.faraid.cb_ahliwaris_12.value > 1)
          && (!document.faraid.ch_ahliwaris_11.checked)){
            dv1_ahliwaris[11] = 16;  /* 2/3 */
            dv2_ahliwaris[11] = 24;
          }else{
            if ((!document.faraid.ch_ahliwaris_1.checked)
            && (!document.faraid.ch_ahliwaris_6.checked)
            && (!document.faraid.ch_ahliwaris_4.checked)
            && (!document.faraid.ch_ahliwaris_8.checked)
            && (document.faraid.ch_ahliwaris_11.checked)){
              ashabah[11] = 1;
            }else{
              if ((!document.faraid.ch_ahliwaris_1.checked)
              && (!document.faraid.ch_ahliwaris_6.checked)
              && (!document.faraid.ch_ahliwaris_4.checked)
              && (!document.faraid.ch_ahliwaris_8.checked)
              && (!document.faraid.ch_ahliwaris_11.checked)){
                ashabah[11] = 1;
              }
            }
          }
        }
      }
    }

    function AhliWaris_SaudaraLakiSeBapak(){
      if (document.faraid.ch_ahliwaris_13.checked){
        if ((!document.faraid.ch_ahliwaris_1.checked)
        && (!document.faraid.ch_ahliwaris_6.checked)
        && (!document.faraid.ch_ahliwaris_4.checked)
        && (!document.faraid.ch_ahliwaris_8.checked)
        && (!document.faraid.ch_ahliwaris_11.checked)){
          ashabah[12] = 1;
        }
      }
    }

    function AhliWaris_SaudaraWanitaSeBapak(){
      if (document.faraid.ch_ahliwaris_14.checked){
        if ((!document.faraid.ch_ahliwaris_4.checked)
        && (!document.faraid.ch_ahliwaris_8.checked)
        && (!document.faraid.ch_ahliwaris_1.checked)
        && (!document.faraid.ch_ahliwaris_6.checked)
        && (!document.faraid.ch_ahliwaris_11.checked)
        && (!document.faraid.ch_ahliwaris_12.checked)
        && (document.faraid.cb_ahliwaris_14.value == 1)){
          dv1_ahliwaris[13] = 12;   /* 1/2 */
          dv2_ahliwaris[13] = 24;
        }else{
          if ((!document.faraid.ch_ahliwaris_4.checked)
          && (!document.faraid.ch_ahliwaris_8.checked)
          && (!document.faraid.ch_ahliwaris_1.checked)
          && (!document.faraid.ch_ahliwaris_6.checked)
          && (!document.faraid.ch_ahliwaris_11.checked)
          && (!document.faraid.ch_ahliwaris_12.checked)
          && (document.faraid.cb_ahliwaris_14.value > 1)){
            if ((dv1_ahliwaris[10] == 1) && (dv1_ahliwaris[10] == 2)){
              dv1_ahliwaris[13] = 16;  /* 2/3 */
              dv2_ahliwaris[13] = 24;
            }
          }else{
            if ((!document.faraid.ch_ahliwaris_4.checked)
            && (!document.faraid.ch_ahliwaris_8.checked)
            && (!document.faraid.ch_ahliwaris_1.checked)
            && (!document.faraid.ch_ahliwaris_6.checked)
            && (!document.faraid.ch_ahliwaris_11.checked)
            && (!document.faraid.ch_ahliwaris_12.checked)
            && (document.faraid.ch_ahliwaris_13.checked)){
              ashabah[13] = 1;
            }else{
              if ((!document.faraid.ch_ahliwaris_4.checked)
              && (!document.faraid.ch_ahliwaris_8.checked)
              && (!document.faraid.ch_ahliwaris_1.checked)
              && (!document.faraid.ch_ahliwaris_6.checked)
              && ((!document.faraid.ch_ahliwaris_11.checked) || (!document.faraid.ch_ahliwaris_12.checked))
              && (!document.faraid.ch_ahliwaris_2.checked)
              && (document.faraid.cb_ahliwaris_12.value == 1)){
                dv1_ahliwaris[13] = 4;  /* 1/6 */
                dv2_ahliwaris[13] = 24;
              }else{
                if ((document.faraid.ch_ahliwaris_1.checked)
                && (document.faraid.ch_ahliwaris_6.checked)
                && (document.faraid.ch_ahliwaris_4.checked)
                && (document.faraid.ch_ahliwaris_8.checked)
                && (document.faraid.ch_ahliwaris_11.checked)
                && (document.faraid.ch_ahliwaris_12.checked)
                && (document.faraid.cb_ahliwaris_12.value > 1)){
                  ashabah[13] = 1;
                }
              }
            }
          }
        }
      }
    }

    function AhliWaris_SaudaraLakiSeIbu(){
      if (document.faraid.ch_ahliwaris_15.checked){
        if ((!document.faraid.ch_ahliwaris_4.checked)
        && (!document.faraid.ch_ahliwaris_8.checked)
        && (!document.faraid.ch_ahliwaris_1.checked)
        && (!document.faraid.ch_ahliwaris_6.checked)
        && (!document.faraid.cb_ahliwaris_15.value == 1)){
          dv1_ahliwaris[14] = 4;    /* 1/6 */
          dv2_ahliwaris[14] = 24;
        }else{
          if ((!document.faraid.ch_ahliwaris_4.checked)
          && (!document.faraid.ch_ahliwaris_8.checked)
          && (!document.faraid.ch_ahliwaris_1.checked)
          && (!document.faraid.ch_ahliwaris_6.checked)
          && (!document.faraid.cb_ahliwaris_15.value > 1)){
            dv1_ahliwaris[14] = 8;  /* 1/3 */
            dv2_ahliwaris[14] = 24;
          }
        }
      }
    }

    function AhliWaris_SaudaraWanitaSeIbu(){
      if (document.faraid.ch_ahliwaris_16.checked){
        if ((!document.faraid.ch_ahliwaris_4.checked)
        && (!document.faraid.ch_ahliwaris_8.checked)
        && (!document.faraid.ch_ahliwaris_1.checked)
        && (!document.faraid.ch_ahliwaris_6.checked)
        && (!document.faraid.cb_ahliwaris_16.value == 1)){
          dv1_ahliwaris[15] = 4;   /* 1/6 */
          dv2_ahliwaris[15] = 24;
        }else{
          if ((!document.faraid.ch_ahliwaris_4.checked)
          && (!document.faraid.ch_ahliwaris_8.checked)
          && (!document.faraid.ch_ahliwaris_1.checked)
          && (!document.faraid.ch_ahliwaris_6.checked)
          && (!document.faraid.cb_ahliwaris_16.value > 1)){
            dv1_ahliwaris[15] = 8;    /* 1/3 */
            dv2_ahliwaris[15] = 24;
          }
        }
      }
    }

    function AhliWaris_AnakLakiSaudaraKandungLaki(){
      if (document.faraid.ch_ahliwaris_17.checked){
        if ((document.faraid.ch_ahliwaris_2.checked)
        && (document.faraid.ch_ahliwaris_3.checked)
        && (document.faraid.ch_ahliwaris_5.checked)
        && (document.faraid.cb_ahliwaris_7.checked)
        && (document.faraid.ch_ahliwaris_9.checked)
        && (document.faraid.ch_ahliwaris_10.checked)
        && (!document.faraid.ch_ahliwaris_4.checked)
        && (!document.faraid.ch_ahliwaris_8.checked)
        && (!document.faraid.ch_ahliwaris_1.checked)
        && (!document.faraid.ch_ahliwaris_6.checked)){
          dv1_ahliwaris[16] = 8;    /* 1/3 */
          dv2_ahliwaris[16] = 24;
        }else{
          if ((document.faraid.ch_ahliwaris_4.checked)
          || (document.faraid.ch_ahliwaris_8.checked)
          || (document.faraid.ch_ahliwaris_1.checked)
          || (document.faraid.ch_ahliwaris_6.checked)){
            /* MAHJUB */
          }else{
            ashabah[16] = 1;
          }
        }
      }
    }

    function AhliWaris_AnakLakiSaudaraSeBapak(){
      if (document.faraid.ch_ahliwaris_18.checked){
        if ((!document.faraid.ch_ahliwaris_1.checked)
        && (!document.faraid.ch_ahliwaris_6.checked)
        && (!document.faraid.ch_ahliwaris_4.checked)
        && (!document.faraid.ch_ahliwaris_8.checked)
        && (!document.faraid.ch_ahliwaris_11.checked)){
          ashabah[17] = 1;
        }
      }
    }

    function AhliWaris_SaudaraKandungLakiBapak_Paman(){
      if (document.faraid.ch_ahliwaris_19.checked){
        if ((document.faraid.ch_ahliwaris_2.checked)
        && (document.faraid.ch_ahliwaris_3.checked)
        && (document.faraid.ch_ahliwaris_5.checked)
        && (document.faraid.cb_ahliwaris_7.checked)
        && (document.faraid.ch_ahliwaris_9.checked)
        && (document.faraid.ch_ahliwaris_10.checked)
        && (!document.faraid.ch_ahliwaris_4.checked)
        && (!document.faraid.ch_ahliwaris_8.checked)
        && (!document.faraid.ch_ahliwaris_1.checked)
        && (!document.faraid.ch_ahliwaris_6.checked)){
          dv1_ahliwaris[18] = 8;    /* 1/3 */
          dv2_ahliwaris[18] = 24;
        }else{
          if ((document.faraid.ch_ahliwaris_4.checked)
          || (document.faraid.ch_ahliwaris_8.checked)
          || (document.faraid.ch_ahliwaris_1.checked)
          || (document.faraid.ch_ahliwaris_6.checked)){
            /* MAHJUB */
          }else{
            ashabah[18] = 1;
          }
        }
      }
    }

    function AhliWaris_SaudaraLakiSeBapakBapak_Paman(){
      if (document.faraid.ch_ahliwaris_20.checked){
        if ((!document.faraid.ch_ahliwaris_1.checked)
        && (!document.faraid.ch_ahliwaris_6.checked)
        && (!document.faraid.ch_ahliwaris_4.checked)
        && (!document.faraid.ch_ahliwaris_8.checked)
        && (!document.faraid.ch_ahliwaris_11.checked)){
          ashabah[19] = 1;
        }
      }
    }

    function AhliWaris_AnakLakiSaudaraKandungLakiBapak(){
      if (document.faraid.ch_ahliwaris_21.checked){
        if ((document.faraid.ch_ahliwaris_2.checked)
        && (document.faraid.ch_ahliwaris_3.checked)
        && (document.faraid.ch_ahliwaris_5.checked)
        && (document.faraid.cb_ahliwaris_7.checked)
        && (document.faraid.ch_ahliwaris_9.checked)
        && (document.faraid.ch_ahliwaris_10.checked)
        && (!document.faraid.ch_ahliwaris_4.checked)
        && (!document.faraid.ch_ahliwaris_8.checked)
        && (!document.faraid.ch_ahliwaris_1.checked)
        && (!document.faraid.ch_ahliwaris_6.checked)){
          dv1_ahliwaris[20] = 8;    /* 1/3 */
          dv2_ahliwaris[20] = 24;
        }else{
          if ((document.faraid.ch_ahliwaris_4.checked)
          || (document.faraid.ch_ahliwaris_8.checked)
          || (document.faraid.ch_ahliwaris_1.checked)
          || (document.faraid.ch_ahliwaris_6.checked)){
            /* MAHJUB */
          }else{
            ashabah[20] = 1;
          }
        }
      }
    }

    function AhliWaris_AnakLakiSaudaraSeBapakBapak(){
      if (document.faraid.ch_ahliwaris_22.checked){
        if ((!document.faraid.ch_ahliwaris_1.checked)
        && (!document.faraid.ch_ahliwaris_6.checked)
        && (!document.faraid.ch_ahliwaris_4.checked)
        && (!document.faraid.ch_ahliwaris_8.checked)
        && (!document.faraid.ch_ahliwaris_11.checked)){
          ashabah[21] = 1;
        }
      }
    }

    function AhliWaris_BudakLaki(){
      if (document.faraid.ch_ahliwaris_23.checked){
        ashabah[22] = 1;
      }
    }

    function AhliWaris_BudakPerempuan(){
      if (document.faraid.ch_ahliwaris_24.checked){
        ashabah[23] = 1;
      }
    }

    function calculate_warisan_ahliwaris(){
      AhliWaris_SuamiIstri();
      AhliWaris_Bapak();
      AhliWaris_Kakek();
      AhliWaris_Ibu();
      AhliWaris_NenekBapak();
      AhliWaris_NenekIbu();
      AhliWaris_AnakLaki();
      AhliWaris_CucuLaki();
      AhliWaris_AnakWanita();
      AhliWaris_CucuWanita();
      AhliWaris_SaudaraKandungLaki();
      AhliWaris_SaudaraKandungWanita();
      AhliWaris_SaudaraLakiSeBapak();
      AhliWaris_SaudaraWanitaSeBapak();
      AhliWaris_SaudaraLakiSeIbu();
      AhliWaris_SaudaraWanitaSeIbu();
      AhliWaris_AnakLakiSaudaraKandungLaki();
      AhliWaris_AnakLakiSaudaraSeBapak();
      AhliWaris_SaudaraKandungLakiBapak_Paman();
      AhliWaris_SaudaraLakiSeBapakBapak_Paman();
      AhliWaris_AnakLakiSaudaraKandungLakiBapak();
      AhliWaris_AnakLakiSaudaraSeBapakBapak();
      AhliWaris_BudakLaki();
      AhliWaris_BudakPerempuan();
      msg_error = '';
      input_jml_ahliwaris();

      if (msg_error == ''){
        for (I = 0; I < 24; I++){
          if (dv1_ahliwaris[I] != 0){
            bagian_perkepala = addCommas((parseInt(dv1_ahliwaris[I]) * parseInt(document.getElementById('HartaWarisan').value)) / parseInt(dv2_ahliwaris[I]))
			bagian_perkepala1 = addCommas((parseInt(dv1_ahliwaris[I]) * parseInt(document.getElementById('HartaWarisan').value)) / parseInt(dv2_ahliwaris[I])/parseInt(document.getElementById('cb_ahliwaris_'+(I+1)).value))
            var temp_row = document.getElementById('tbl_hasil').innerHTML;
            document.getElementById('tbl_hasil').innerHTML = temp_row + '<tr><td height="23" bgcolor="#CCCCCC"'+
            ' class="faraid_out" align="center">'+document.getElementById('cb_ahliwaris_'+(I+1)).value+'</td><td bgcolor="#CCCCCC" '+
            'class="faraid_out">'+document.getElementById('l_ahliwaris_'+(I+1)).innerHTML+'</td> '+
            '<td bgcolor="#CCCCCC" class="faraid_out">Ashhabul Furudh</td><td bgcolor="#CCCCCC" class="faraid_out" align="center">'+
            dv1_ahliwaris[I]+'/'+dv2_ahliwaris[I]+'</td><td bgcolor="#CCCCCC" class="faraid_out">' + bagian_perkepala1 + '</td><td bgcolor="#CCCCCC" '+
            'class="faraid_out">' + bagian_perkepala + '</td></tr>';
          }
        }
        calculate_warisan_ashabah();
        for (I = 0; I < 24; I++){
          if (ashabah[I] != 0){
            bagian_perkepala_ashabah = addCommas((parseInt(dv1_ahliwaris_ashabah[I]) * parseInt(document.getElementById('HartaWarisan').value)) / parseInt(dv2_ahliwaris_ashabah[I]))
			bagian_perkepala_ashabah2 = addCommas((parseInt(dv1_ahliwaris_ashabah[I]) * parseInt(document.getElementById('HartaWarisan').value)) / parseInt(dv2_ahliwaris_ashabah[I])/parseInt(document.getElementById('cb_ahliwaris_'+(I+1)).value))
            var temp_row = document.getElementById('tbl_hasil').innerHTML;
            document.getElementById('tbl_hasil').innerHTML = temp_row + '<tr><td height="23" bgcolor="#CCCCCC"'+
            ' class="faraid_out" align="center">'+document.getElementById('cb_ahliwaris_'+(I+1)).value+'</td><td bgcolor="#CCCCCC" '+
            'class="faraid_out">'+document.getElementById('l_ahliwaris_'+(I+1)).innerHTML+'</td> '+
            '<td bgcolor="#CCCCCC" class="faraid_out">Ahlul Ashabah</td><td bgcolor="#CCCCCC" class="faraid_out" align="center">'+
            dv1_ahliwaris_ashabah[I]+'/'+dv2_ahliwaris_ashabah[I]+'</td><td bgcolor="#CCCCCC" class="faraid_out">' + bagian_perkepala_ashabah2 + '</td><td bgcolor="#CCCCCC" '+
            'class="faraid_out">' + bagian_perkepala_ashabah + '</td></tr>';
          }
        }
      }else{
        window.alert(msg_error);
      }




    }

    function calculate_warisan_ashabah(){
      laki = false;
      wanita = false;
      bagian_furudh = 0;
      bagian_ashabah = 0;
      jml_laki = 0;
      jml_wanita = 0;
      n = 0;
      while (n < 24){
        bagian_furudh = parseInt(bagian_furudh) + parseInt(dv1_ahliwaris[n]);
        if (ashabah[n] == 1){
          if (ahliwaris_jk[n] == 0){
            jml_laki = parseInt(jml_laki) + parseInt(jml_ahliwaris[n]);
            laki = true;
          }else{
            if (ahliwaris_jk[n] == 1){
              jml_wanita = parseInt(jml_wanita) + parseInt(jml_ahliwaris[n]);
              wanita = true;
            }
          }
        }
        n++;
      }

      bagian_ashabah = 24 - parseInt(bagian_furudh);
      if ((laki) && (wanita)){
        /*  */
        n = 0;
        while (n < 24){
          if (ashabah[n] == 1){
            if (ahliwaris_jk[n] == 0){
              dv1_ahliwaris_ashabah[n] = (parseInt(jml_ahliwaris[n])*2) * parseInt(bagian_ashabah);
              dv2_ahliwaris_ashabah[n] = ((parseInt(jml_laki)*2)+parseInt(jml_wanita))*24;
            }else{
              if (ahliwaris_jk[n] == 1){
                dv1_ahliwaris_ashabah[n] = parseInt(jml_ahliwaris[n]) * parseInt(bagian_ashabah);
                dv2_ahliwaris_ashabah[n] = ((parseInt(jml_laki)*2)+parseInt(jml_wanita))*24;
              }
            }
          }
          n++;
        }

      }else{
        if ((laki) && (!wanita)){
          /*  */
          n = 0;
          while (n < 24){
            if (ashabah[n] == 1){
              if (jml_laki > 1){
                dv1_ahliwaris_ashabah[n] = parseInt(bagian_ashabah) / parseInt(jml_laki);
                dv2_ahliwaris_ashabah[n] = 24 ;
              }else{
                if (jml_laki == 1){
                  dv1_ahliwaris_ashabah[n] = parseInt(bagian_ashabah);
                  dv2_ahliwaris_ashabah[n] = 24;
                }
              }
            }
            n++;
          }

        }else{
          if ((!laki) && (wanita)){
            /*  */
            n = 0;
            while (n < 24){
              if (ashabah[n] == 1){
                if (jml_wanita > 1){
                  dv1_ahliwaris_ashabah[n] = parseInt(bagian_ashabah) / parseInt(jml_wanita);
                  dv2_ahliwaris_ashabah[n] = 24;
                }else{
                  if (jml_wanita == 1){
                    dv1_ahliwaris_ashabah[n] = parseInt(bagian_ashabah);
                    dv2_ahliwaris_ashabah[n] = 24;
                  }
                }
              }
              n++;
            }

          }else{
            window.write('blank');
          }
        }
      }

    }

    function input_div_ahliwaris(){




      div_ahliwaris[4]  = 0;
      div_ahliwaris[5]  = 0;
      div_ahliwaris[6]  = 0;
      div_ahliwaris[7]  = 0;
      div_ahliwaris[8]  = 0;
      div_ahliwaris[9 ] = 0;
      div_ahliwaris[10] = 0;
      div_ahliwaris[11] = 0;
      div_ahliwaris[12] = 0;
      div_ahliwaris[13] = 0;
      div_ahliwaris[14] = 0;
      div_ahliwaris[15] = 0;
      div_ahliwaris[16] = 0;
      div_ahliwaris[17] = 0;
      div_ahliwaris[18] = 0;
      div_ahliwaris[19] = 0;
      div_ahliwaris[20] = 0;
      div_ahliwaris[21] = 0;
      div_ahliwaris[22] = 0;
      div_ahliwaris[23] = 0;
      div_ahliwaris[24] = 0;

    }


/*]]>*/

