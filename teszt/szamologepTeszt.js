QUnit.module('szamol', function() {
   hook.before(()=> {
        szamologep = new Szamologep();
    })


    QUnit.test('Létezik-e a metódus', (assert) => {  /** */
      assert.ok(szamologep.szamol);
    });

    QUnit.test('Két egész szám összege', (assert) => {  
      assert.equal(szamologep.szamol(1, 2, "+"), 3);
    });

    QUnit.test('Két egész szám szorzata', (assert) => {  
        assert.equal(szamologep.szamol(11, 2, "*"), 22);
      });

    QUnit.test('Negatív és pozitív szám összege', (assert) => { 
      assert.equal(szamologep.szamol(-1, 2, "+"), 1);
    });
    
    QUnit.test('Két tört szám összege', (assert) => {  
      assert.equal(szamologep.szamol(1.3, 2, "+"), 3.3);
    });

    QUnit.test('Negatív törtek összege', (assert) => {  
      assert.equal(szamologep.szamol(-1.3, 2, "+"), 0.7);
    });

    QUnit.test('Speciális törtek összege', (assert) => {  
      assert.equal(szamologep.szamol(0.1, 0.2, "+"), 0.3);
    });

    QUnit.test('Egy paraméter megadása', (assert) => {  
        assert.equal(szamologep.szamol(3.999999e33, 3.999999e33, "+"), "Túlcsordulás");
      });

    QUnit.test('Egy paraméter megadása', (assert) => {  
      assert.equal(szamologep.szamol(3), "Három paraméter szükséges!");
    });

    QUnit.test('Nincs paraméter megadva', (assert) => {  
        assert.equal(szamologep.szamol(), "Három paraméter szükséges!");
      });

    QUnit.test('Szám szövegként megadva', (assert) => {  
      assert.equal(szamologep.szamol(1.3, "2", "+"), 3.3);
    });

    QUnit.test('Szöveg van megadva', (assert) => {  
        assert.equal(szamologep.szamol("cica", "kutya", "+"), "A paraméterek számok legyenek!");
      });
    
  });
